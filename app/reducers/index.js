import Axios from "axios";

//What do I need to keep track of? How many candies we have

const initialState = {
  allCandy: []
};

//ACTION
const GET_ALL_CANDY = "GET_ALL_CANDY";

//ACTION CREATOR
const allCandy = candy => {
  return {
    type: "GET_ALL_CANDY",
    candy
  };
};
//THUNK CREATOR
export const getAllCandy = () => {
  return async dispatch => {
    const result = await Axios.get("/api/candies");
    dispatch(allCandy(result.data));
  };
};

//REDUCER
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CANDY":
      return { ...state, allCandy: action.candy };
    default:
      return state;
  }
};

export default rootReducer;
