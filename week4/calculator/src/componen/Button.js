import React, { Component } from 'react';
import './Button.css';

class Button extends Component{

    // Mengecek apakah button itu operator atau tidak
    isOperator = val =>{
        return !isNaN(val) || val === "." || val ==="="
    }
    
  render(){
    return (
        // this will make all operator class name as button operator
        // and then the css will make all operator orange
      <div className={`button ${this.isOperator
        (this.props.children) ? "" : "operator"}`}   
        // if button is clicked then take the value inside the button
        onClick={()=> this.props.handleClick(this.props.children)} 
      >
          {/* this will pas the value from app to button */}
          {this.props.children}
      </div>
    );
  }
  
}

export default Button;
