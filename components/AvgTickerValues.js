import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './AvgTickerValues.module.css'
import GJNumberLabel from "./GJNumberLabel";
import GJNumbersView from "./GJNumbersView";
import CircularProgress from '@material-ui/core/CircularProgress';

export default function AvgTickerValues(props) {

  const { averageData } = props;
  const [averageValue, setAverageValue] = useState(0);
  const [loading, setLoading] = useState(true)

  const getAverageTickerValues = () => {
    if(averageData.length===3)
    {
      let sum = averageData.reduce((acc, current) => acc+current.value, 0); // divide in 2 lines to make it more readable
      let avg =  sum/averageData.length;
      setAverageValue(avg.toFixed(2));
    }
    setLoading(false)
  }

  useEffect(() => getAverageTickerValues(), [averageData])

  return (
    <div className={styles.containerItem}>
      <Paper elevation={3} className={styles.averageContainer}>
      <h2>{ loading? "Loading..." : "Average Ticker Values" }</h2>
        <Paper elevation={3} className={styles.tradingPairsPaper}>
          <h3>{ loading ? <CircularProgress /> : "Single Ticker Values" }</h3>
          <div className={styles.singleValues}>
            {
              averageData.length && (
                averageData.map(pair => <GJNumberLabel description={pair.name} value={pair.value} key={pair.name} />  )            
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