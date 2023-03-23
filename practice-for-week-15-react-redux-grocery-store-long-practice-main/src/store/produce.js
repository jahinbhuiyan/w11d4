import * as produceData from '../mockData/produce.json'

export default function produceReducer(state={}, action) {
  switch (action.type) {
    default:
      return state
  }
}

const POPULATE = "produce/populate"

export function populateProduce(){

  return {type: POPULATE, produce: produceData}
}