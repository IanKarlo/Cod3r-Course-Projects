import React, { Component } from 'react';

import Button from '../Button';
import Display from '../Display';

import './index.css';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default class Calculator extends Component{

  state={...initialState};

  clearMemory(){
    this.setState({ ...initialState});
  }

  setOperation(operation){
    if(this.state.current === 0){
      this.setState({operation, current: 1, clearDisplay: true});
    } else {
      const equals = operation === '=';
      const currentOperation = this.state.operation;

      const values = [...this.state.values];

      switch(this.state.operation){
        case '+': values[0] = values[0] + values[1];
                  values[1] = 0;
                  break;
        case '-': values[0] = values[0] - values[1];
                  values[1] = 0;
                  break;
        case '*': values[0] = values[0] * values[1];
                  values[1] = 0;
                  break;
        case '/': values[0] = values[0] / values[1];
                  values[1] = 0;
                  break;
      }

      this.setState({
        displayValue: values[0],
        values,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
      })
    }
  }

  addDigit(n){
    if(n === '.' && this.state.displayValue.includes('.')){
      return ;
    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;

    this.setState({displayValue, clearDisplay: false});

    if(n !== '.'){
      const index = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[index] = newValue;
      this.setState({values});
      console.log(values);
    }
    
  }

  render(){

    const addDigit = n => this.addDigit(n);
    const setOperation = op => this.setOperation(op);
    const clearMemory = () => this.clearMemory();

    return(
      <div className="calculator">
        <Display value={this.state.displayValue}/>
        <Button text="AC" span={3} click={clearMemory}/>
        <Button text="/" operation click={setOperation}/>
        <Button text="7" click={addDigit}/>
        <Button text="8" click={addDigit}/>
        <Button text="9" click={addDigit}/>
        <Button text="*" operation click={setOperation}/>
        <Button text="4" click={addDigit}/>
        <Button text="5" click={addDigit}/>
        <Button text="6" click={addDigit}/>
        <Button text="-" operation click={setOperation}/>
        <Button text="1" click={addDigit}/>
        <Button text="2" click={addDigit}/>
        <Button text="3" click={addDigit}/>
        <Button text="+" operation click={setOperation}/>
        <Button text="0" span={2} click={addDigit}/>
        <Button text="." click={addDigit}/>
        <Button text="=" operation click={setOperation}/>
      </div>
    );
  }
}