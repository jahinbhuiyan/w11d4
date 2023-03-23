import produceData from '../mockData/produce.json';

function arrToObj(arr) {
  const obj = {};
  for (let ele of arr){
    obj[ele.id] = ele;
  };
  return obj;
}

const ADD = "cart/ADD";

export function addToCart(id) {
  let data = arrToObj(produceData);
  return { type: ADD, id: data[id] };
}

export default function cartReducer(state = {}, action) {
  switch(action.type) {
    case ADD:
      addToCart()
      return 
    default: 
      return state;
  }
}