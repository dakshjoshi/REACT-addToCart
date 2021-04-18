import React from "react";
import { useState } from "react";
import "./superAwesome.css";
import JCB from "./JCB.png";


function Card(itemData) {

  const [list, newlist] = useState();
  console.log(list);

  function addItem() {
    newlist(itemData.id.title)
  }
  return <>
</>
  
}

export default Card;
