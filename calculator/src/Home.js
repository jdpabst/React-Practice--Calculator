import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import Homework from './components/Homework'

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      total: '0'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.getHomework = this.getHomework.bind(this);
  }

  handleClick(button){
    if(this.state.total.length < 14) {
      if(this.state.total == 0){
        this.setState({
          total: button
        })
      } else {
          this.setState({
            total: this.state.total + button
          })
        }
      }
    }

  handleClear(){
    this.setState({
      total: '0'
    })
  }

  handleEqual(){
    const newTotal = eval(this.state.total)
    if(newTotal % 1 != 0){
      this.setState({
        total: eval(this.state.total).toFixed(2)
      })
    } else {
      this.setState({
        total: eval(this.state.total)
      })
    }
      
  }
  
  getHomework(val){
    this.setState({
      total: val
    })
  }

  render() {
    return (
      <div class="main_div">
        <section className="calculator">
          <h2>Calculator</h2>
          <section className="display">
            { this.state.total }
          </section>
          <section className="button_container">
            <div className="one" onClick={ () => {this.handleClick('1')} }>1</div>
            <div className="two" onClick={ () => {this.handleClick('2')} }>2</div>
            <div className="three" onClick={ () => {this.handleClick('3')} }>3</div>
            <div class="multiply" onClick={ () => {this.handleClick('*')} }>*</div>
            <div className="four" onClick={ () => {this.handleClick('4')} }>4</div>
            <div className="five" onClick={ () => {this.handleClick('5')} }>5</div>
            <div className="six" onClick={ () => {this.handleClick('6')} }>6</div>
            <div class="divide" onClick={ () => {this.handleClick('/')} }>/</div>
            <div className="seven" onClick={ () => {this.handleClick('7')} }>7</div>
            <div className="eight" onClick={ () => {this.handleClick('8')} }>8</div>
            <div className="nine" onClick={ () => {this.handleClick('9')} }>9</div>
            <div class="add" onClick={ () => {this.handleClick('+')} }>+</div>
            <div className="zero"onClick={ () => {this.handleClick('0')} }>0</div>
            <div className="clear_bttn" onClick={ this.handleClear }>CLR</div>
            <div className="equals" onClick={ this.handleEqual }>=</div>
            <div class="subtract" onClick={ () => {this.handleClick('-')} }>-</div>
          </section>
        </section>
          <Homework getHomework = {this.getHomework }/>
        </div>
        

     
    )
  }
}

export default Home;
