import React, { useState, useEffect } from "react";
import styles from './GJNumberLabel.module.css'

export default function GJNumberLabel(props) {

  const { description, value } = props;
  const [formatedValue, setFormatedValue] = useState(value);

  useEffect(() => {
    if(description==="timestamp")
    {
      setFormatedValue(new Date(value*1000).toLocaleString())
    }
    else
    {
      setFormatedValue(`$ ${parseFloat(value).toFixed(2)}`)
    }    
  }, [description, value])

  return (
    <div className={styles.GJNumberLabel}>
      <div className={styles.description}><h4>{description}</h4></div>
    <div className={styles.value}>{formatedValue}</div>
    </div>
  )
}