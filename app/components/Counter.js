// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../constants/routes';


export default class Counter extends Component {
  constructor(props){
    super(props)
    this.state={
      cpuCSS:'',
      memoryCSS:'',
      memory:''
    }
    // this.oncl = this.oncl.bind(this);
  }
  componentDidMount(){
    this.props.incrementAsync()
    this.props.decrementAsync()
  }
  oncl(){
    
  }

  renderLinks() {
    if (this.props.cpu && this.props.memory) {
      this.state.memory=Math.round((this.props.memory.free/this.props.memory.total)*100)/100;
      return (
        <div>
          <div>
            <p> CPU Free {this.props.cpu.usage}%</p>
          </div>
          <div>
            <p>Memory free {this.state.memory}%</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Waiting</h1>
        </div>
      );
    }
  }



  render() {
    
    return (
      <div>
        {this.renderLinks()}

      </div>
    );
  }
}
