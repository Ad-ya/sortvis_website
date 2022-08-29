import React from 'react';
import './cols.css';

function Colorgrads(props) {
  return (
    <div className="circle mx-2" onClick={() => props.toggle(props.val)}>
      <div className="left-half" style={{backgroundColor: props.left}}/>
      <div className="right-half" style={{backgroundColor: props.right}}/>
    </div>
  )
}

export default Colorgrads