import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './AvgTickerValues.module.css'
import GJNumberLabel from "./GJNumberLabel";
import GJNumbersView from "./GJNumbersView";
import CircularProgress from '@material-ui/core/CircularProgress';

export default function AvgTickerValues() {

  const [averageValue, setAverageValue] = useState(0);
  const [pairsData, setPairsData] = useState([]);
  const [loading, setLoading] = useState(true)

  async function fetchTickerValues() {
    try {
      await Promise.all(
        [fetch(`https://cors-anywhere.herokuapp.com/bitstamp.net/api/v2/ticker/btcusd`),
        fetch(`https://cors-anywhere.herokuapp.com/api.coinbase.com/v2/exchange-rates?currency=BTC`),
        fetch(`https://cors-anywhere.herokuapp.com/api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD`)
      ]).then(([data1, data2, data3]) =>  {
        return Promise.all([data1.json(),  data2.json(), data3.json()])
      }).then(([bitstamp, coinbase, bitfinex]) => {
        setPairsData([
          { 
            name: "bitstamp",
            value: parseFloat(bitstamp.bid) 
          },
          { name: "coinbase",
            value: parseFloat(coinbase.data.rates.USD)
          },
          { name: "bitfinex",
            value: bitfinex[0][1] }
        ]);
        setLoading(false)
      });

    }
    catch(error) {
      console.log(error);
    }
  }

  const getAverageTickerValues = () => {
    if(pairsData.length===3)
    {
      let sum = pairsData.reduce((acc, current) => acc+current.value, 0); // divide in 2 lines to make it more readable
      let avg =  sum/pairsData.length;
      setAverageValue(avg.toFixed(2));
    }
  }

  useEffect(() => getAverageTickerValues(), [pairsData])

  useEffect(() => fetchTickerValues(), []);

  return (
    <div className={styles.containerItem}>
      <Paper elevation={3} className={styles.averageContainer}>
      <h2>{ loading? "Loading..." : "Average Ticker Values" }</h2>
        <Paper elevation={3} className={styles.tradingPairsPaper}>
          <h3>{ loading ? <CircularProgress /> : "Single Ticker Values" }</h3>
          <div className={styles.singleValues}>
            {
              pairsData.length && (
                pairsData.map(pair => <GJNumberLabel description={pair.name} value={pair.value} key={pair.name} />  )            
              )
            }
          </div>
          </Paper>
          <div className={styles.average}>
            <h3>Average Value</h3>
          <h4>$ {averageValue}</h4>  
          </div>
      </Paper>
    </div>
  )
}