import React, { useState, useEffect } from 'react';
import GJNumbersView from "./GJNumbersView";
import CositoDeArriba from "./CositoDeArriba";
import styles from './TradingPairsContainer.module.css'
import Paper from '@material-ui/core/Paper';


export default function TradingPairsContainer(props) {

  const { pairsData } = props;

  const [pair, setPair] = useState({
      symbol: "",
      description: ""
  });

  const handlePairChange = (symbol, description) => {
    setPair({
      symbol: symbol,
      description: description 
    });
  }

  const clearPairSelection = () => {
    setPair({});
  }

  return (
    <div  className={styles.containerItem}>
      <Paper elevation={3} className={styles.tradingPairsContainer}>
        <CositoDeArriba pair={pair} pairData={pairsData} handlePairChange={handlePairChange} clearPairSelection={clearPairSelection} />
        <GJNumbersView pair={pair} />
      </Paper>
      
    </div>
  )
}