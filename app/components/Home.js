// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    console.log(process)
    return (
      <div className={styles.container} data-tid="container">
        <h2>CPU INFO</h2>
       {/* <h1>
          {process.getSystemMemoryInfo()} 
       </h1> */}
        <h2>Memory INFO</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
