import React, { useState, useEffect } from 'react';
import GJNumberLabel from "./GJNumberLabel";
import Paper from '@material-ui/core/Paper';


export default function GJNumbersView(props) {

  const { pair } = props;
  const [pairComparison, setPairComparison] = useState([]);
  let [GJNumberLabels, setGJNumberLabels] = useState([]);

  async function fetchPairComparison() {
    try {
      let resp = await fetch(`https://www.bitstamp.net/api/v2/ticker/${pair.symbol}`);
      let fetchedPairData=await resp.json();
      setPairComparison(fetchedPairData)
    } catch (error) {
      console.log(error);
    }      
  }

  useEffect(() => {
    if(pair.symbol)
      fetchPairComparison();
    else
      setGJNumberLabels([]);
  }, [pair]);

  useEffect(() => {
    returnGJNumberLabels();
  }, [pairComparison])

  function returnGJNumberLabels() {
    const GJNumberLabelsArray=[];
    for(let descriptionValuePair in pairComparison) {
      GJNumberLabelsArray.push({
        description:descriptionValuePair,
        value: pairComparison[descriptionValuePair]
      })
    }
    setGJNumberLabels(GJNumberLabelsArray);
  }

  return (
    <div>
      <Paper elevation={3} className="trading-pairs-paper">
        <h2>{pair.description ? pair.description : "Please select a pair"}</h2>  
        <div className="pairs-list">
          {GJNumberLabels.length>1 && GJNumberLabels.map((GJNumberLabelsArrayElement, i) => 
            <GJNumberLabel {...GJNumberLabelsArrayElement} key={i} />
          )}
        </div>
      </Paper>
    </div>
  )
}