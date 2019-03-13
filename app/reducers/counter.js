// @flow
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
import {cpuFree} from '../getcpuUsage'


const initialState={
  cpuInfo:'',
  memoryInfo:process.getSystemMemoryInfo()
}

export default function counter(state=initialState, action: Action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {...state  , cpuInfo: action.payload};
    case DECREMENT_COUNTER:
      return {...state  , memoryInfo: process.getSystemMemoryInfo()};
    default:
      return state;
  }
}



cpuFree((v)=>{
  let a = {
    free:Math.round((v*100)*100)/100,
    usage:Math.round(((1-v)*100)*100)/100
  }
  return a;
})
