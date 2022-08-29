import React from 'react';
import Colorgrads from './colorgrads/color_grads';
// concept of props used here
function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.color.primary_color === props.varCol['two'].primary_color ? 'light' : 'dark' }`}>
      <div className="container-fluid" >
        <a className="navbar-brand" href="/" style={{color : props.color.primary_color }}>{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" style={{color : props.color.primary_color }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" style={{color : props.color.primary_color }}>About</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Colorgrads left = {props.varCol['one'].primary_color} right = {props.varCol['one'].secondary_color} toggle={props.toggle} val = {props.varCol['one']}/>
            <Colorgrads left = {props.varCol['two'].primary_color} right = {props.varCol['two'].secondary_color} toggle={props.toggle} val = {props.varCol['two']}/>
            <Colorgrads left = {props.varCol['three'].primary_color} right = {props.varCol['three'].secondary_color} toggle={props.toggle} val = {props.varCol['three']}/>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar