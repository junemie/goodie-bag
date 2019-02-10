import Axios from "axios";

//What do I need to keep track of? How many candies we have

const initialState = {
  allCandy: [],
  singleCandy: {}
};

//-----------------ACTION----------------
const GET_ALL_CANDY = "GET_ALL_CANDY";
const GET_SINGLE_CANDY = "GET_SINGLE_CANDY";
// const INCREASE_CANDY = "INCREASE_CANDY";
// const DECREASE_CANDY = "DECREASE_CANDY";
//---------------ACTION CREATOR------------
//ALL CANDY
const allCandy = candy => {
  return {
    type: GET_ALL_CANDY,
    candy
  };
};

const increaseCandy = candy => {
  return {
    type: INCREASE_CANDY,
    candy
  };
};

const decreaseCandy = candy => {
  return {
    type: DECREASE_CANDY,
    candy
  };
};
//---------------SINGLE CANDY-------------
const singleCandy = singleCandy => {
  return {
    type: GET_SINGLE_CANDY,
    singleCandy
  };
};

//----------------THUNK CREATOR-------------
//ALL CANDY
export const getAllCandy = () => {
  return async dispatch => {
    try {
      const result = await Axios.get("/api/candies");
      dispatch(allCandy(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};

//SINGLE CANDY
export const gotSingleCandy = id => {
  return async dispatch => {
    try {
      const result = await Axios.get(`/api/candies/${id}`);
      dispatch(singleCandy(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};

//ADD CANDY
export const addCandy = (currentQty, id) => {
  return async dispatch => {
    try {
      const updatedQuantity = ++currentQty;
      const result = await Axios.put(`/api/candies/${id}`, {
        quantity: updatedQuantity
      });
      dispatch(singleCandy(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};

//REMOVE CANDY
export const removeCandy = (currentQty, id) => {
  return async dispatch => {
    try {
      const updatedQuantity = --currentQty;
      const result = await Axios.put(`/api/candies/${id}`, {
        quantity: updatedQuantity
      });
      dispatch(singleCandy(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};

//--------------------REDUCER--------------------
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CANDY":
      return { ...state, allCandy: action.candy };
    case "GET_SINGLE_CANDY":
      return { ...state, singleCandy: action.singleCandy };
    default:
      return state;
  }
};

export default rootReducer;
