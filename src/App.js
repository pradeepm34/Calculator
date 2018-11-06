import React, { Component } from 'react';
// import './App.css';
import './App.css';
import Buttons from './Buttons';
import Display from './Display';
import Button from './Button';
import math from 'mathjs';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
    operation:[ ]
    };
  };
  calculate=()=>{
    let result = this.state.operation.join('');
    if(result){
      result = math.eval(result);
      result = math.format(result,{precision:14});
      this.setState({
        operation:[result]
      })
    }
  };
  handleClick =(e)=>{
    e.preventDefault();
    const value = e.target.getAttribute("data-value");
    console.log(value);
    switch(value){
      case 'Clear':
      this.setState({
        operation:[]
      });
      break;
      case 'equal':
      this.calculate();
      break;
      default:
      const newOperations = [...this.state.operation,value];
      console.log(newOperations);
      this.setState({
        operation:newOperations
      })

    };
  }
  render() {
    return (
      <div className="App">
      <Display  data={this.state.operation}/>
      <Buttons >
          <Button onClick={this.handleClick} label = "C" value="Clear"/>
          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="0" value="0" />

          <Button onClick={this.handleClick} label="/" value="/" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="." value="." />

          <Button onClick={this.handleClick} label="x" value="*" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="3" value="3" />
          <Button label="" value="null" />

          <Button onClick={this.handleClick} label="-" value="-" />
          <Button onClick={this.handleClick} label="+" size="2" value="+" />
          <Button onClick={this.handleClick} label="=" size="2" value="equal" />
      </Buttons>
  
      </div>
    );
  }
}

export default App;
