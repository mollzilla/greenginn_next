import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout'
import AvgTickerValues from "../../components/AvgTickerValues";
import TradingPairsContainer from "../../components/TradingPairsContainer";
import styles from '../../components/AppContainer.module.css'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default function AppContainer(props) {

  const { pairsData, averageData } = props;
  return (
    <Layout>
      <Container className={styles.AppContainer} maxWidth="xl">
        <h1>
          WELCOME TO MY GREENGINN ASSIGNMENT
        </h1>
        <h4> This will be the main container of the single page App.</h4>
        <h5> <Link href="/">
          <a>Take me to Index</a>
        </Link>
        </h5>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <AvgTickerValues averageData={averageData} />
          <TradingPairsContainer pairsData={pairsData} />
        </Grid>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps(context) {


    let pairsData=[];
    let averageData=[];
    try {    
      let resp = await fetch("https://www.bitstamp.net/api/v2/trading-pairs-info/");
      pairsData=await resp.json();

      await Promise.all(
        [fetch(`https://bitstamp.net/api/v2/ticker/btcusd`),
        fetch(`https://api.coinbase.com/v2/exchange-rates?currency=BTC`),
        fetch(`https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD`)
      ]).then(([data1, data2, data3]) =>  {
        return Promise.all([data1.json(),  data2.json(), data3.json()])
      }).then(([bitstamp, coinbase, bitfinex]) => {
        averageData = [
          { 
            name: "bitstamp",
            value: parseFloat(bitstamp.bid) 
          },
          { name: "coinbase",
            value: parseFloat(coinbase.data.rates.USD)
          },
          { name: "bitfinex",
            value: bitfinex[0][1] }
        ];
      });

    } catch (error) {
      console.log(`The following error occured while fetching data: ${error}`)
    }

  return {
    props: {
      pairsData: pairsData,
      averageData: averageData
    },
  }
}
