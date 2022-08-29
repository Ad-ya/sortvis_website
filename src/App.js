import './App.css';
import Navbar from './collections/Navbar';
import React, { useState } from "react";

function App() {
  let var_col={
    'one' : {'primary_color' : '#fba92c' , 'secondary_color' : '#141414' },
    'two' : {'primary_color' : '#000000' , 'secondary_color' : '#ffffff' },
    'three' : {'primary_color' : '#e6f487' , 'secondary_color' : '#005a31'}
  };

  const [col, colswap] = useState(var_col['one']);

  const toggle = (value) => {
    colswap(value);
  }
  return (
    <Navbar title="Sort Visualiser" toggle={toggle} varCol = {var_col} color = {col}/>
  );
}


export default App;
