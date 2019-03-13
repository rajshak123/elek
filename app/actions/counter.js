// @flow

import {shell} from 'electron'
import type { GetState, Dispatch } from '../reducers/types';
import {cpuFree,cpuUsage} from '../getcpuUsage';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment(val) {
  
  return {
    type: INCREMENT_COUNTER,
    payload:val
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}


export function incrementAsync() {
  return (dispatch: Dispatch) => {
    setInterval(() => {
      cpuFree((v)=>{
        let a = {
          free:Math.round((v*100)*100)/100,
          usage:Math.round(((1-v)*100)*100)/100
        }
        dispatch(increment(a));
      })
    }, 1000);
  };
}
export function decrementAsync() {
  return (dispatch: Dispatch) => {
    setInterval(() => {

      dispatch(decrement());
    }, 1000);
  };
}
