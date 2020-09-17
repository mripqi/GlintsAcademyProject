import React, { Component } from 'react';
import Button from './componen/Button'
import './App.css';
import Input from './componen/Input'
import ClearButton from './componen/ClearButton'
class App extends Component{

  // need to declare it if we want to use state
constructor(props){
  super(props);

  this.state = {
    input: "",
    previousNumber: "",
    currentNumber: "",
    operator: ""
  };
}

  // a function to change state according to input
  addToInput = (val) =>{
    // calc cant have 0 on the front
    if(val == '0' && this.state.input == ""){
      console.log('zero')
    }else{
      this.setState({input: this.state.input + val});
    }
  };

  addDecimal = (val) =>{
    if(this.state.input.indexOf(".")=== -1){
      if(this.state.input == ""){
        this.setState({input: this.state.input + 0 + val});
      }else{
        this.setState({input: this.state.input + val});
      }
      // this.setState({input: this.state.input + val})
    }
  }

  clearInput = () => {
    this.setState({ input: ""})
  }

  op =(val) =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""})
    if(val == "+"){
      this.state.operator = "+"
    } else if(val == "-"){
      this.state.operator = "-"
    } else if(val == "*"){
      this.state.operator = "*"
    }if(val == "/"){
      this.state.operator = "/"
    }
    
  }

  equal = () =>{
    this.state.currentNumber = this.state.input

    if(this.state.operator == "+"){
      this.setState({
          input: parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber)
      })
    }else if(this.state.operator == "-"){
      this.setState({
          input: parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber)
      })
    }else if(this.state.operator == "*"){
      this.setState({
          input: parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber)
      })
    } else if(this.state.operator == "/"){
      this.setState({
          input: parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber)
      })
    }
  }
  
  render(){
    return (
      <div className="App">
        <div className="calc-wraper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.op}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.op}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.op}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            {/* 0 cant be the first input so we need a condition */}
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.equal}>=</Button>
            <Button handleClick={this.op}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
