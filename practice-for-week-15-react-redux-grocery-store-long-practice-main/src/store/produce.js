import produceData from '../mockData/produce.json';

const POPULATE = "produce/POPULATE";

export function populateProduce() {
  return { type: POPULATE, produce: produceData };
}

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE:
      const newState = {};
      for (let produce of action.produce){
        newState[produce.id] = produce;
      };
      return newState;
    default:
      return state;
  }
}