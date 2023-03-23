import * as produceData from '../mockData/produce.json'

export default function produceReducer(state={}, action) {
  switch (action.type) {
    case POPULATE:
      let newState = {}
      for(let produce of action.produce){
        newState[produce.id] = produce
      }
      return newState
    default:
      return state
  }
}

const POPULATE = "produce/populate"

export function populateProduce(){

  return {type: POPULATE, produce: produceData}
}