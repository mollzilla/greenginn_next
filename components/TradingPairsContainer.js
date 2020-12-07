import React, { useState, useEffect } from 'react';
import GJNumbersView from "./GJNumbersView";
import CositoDeArriba from "./CositoDeArriba";
import styles from './TradingPairsContainer.module.css'
import Paper from '@material-ui/core/Paper';


export default function TradingPairsContainer() {

  const [pair, setPair] = useState({
      symbol: "",
      description: ""
  });

  const [pairData, setPairData] = useState([]);

  async function fetchPairData() {
    try {    
      let resp = await fetch("https://www.bitstamp.net/api/v2/trading-pairs-info/");
      let fetchedPairData=await resp.json();
      setPairData(fetchedPairData);
    } catch (error) {
      console.log(error)
    }      
  }

  const handlePairChange = (symbol, description) => {
    setPair({
      symbol: symbol,
      description: description 
    });
  }

  const clearPairSelection = () => {
    setPair({});
  }

  useEffect(() => { fetchPairData() }, [])

  return (
    <div  className={styles.containerItem}>
      <Paper elevation={3} className={styles.tradingPairsContainer}>
        <CositoDeArriba pair={pair} pairData={pairData} handlePairChange={handlePairChange} clearPairSelection={clearPairSelection} />
        <GJNumbersView pair={pair} />
      </Paper>
      
    </div>
  )
}