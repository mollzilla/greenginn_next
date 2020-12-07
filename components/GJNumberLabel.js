import React, { useState, useEffect } from "react";

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


  // console.log(value)
  return (
    <div className="gj-number-label">
      <div className="description"><h4>{description}</h4></div>
    <div className="value">{formatedValue}</div>
    </div>
  )
}