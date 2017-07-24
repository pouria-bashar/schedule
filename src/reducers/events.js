import * as ActionTypes from 'actionTypes';

const initialState = { items: []};
export default(state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.ADD_EVENT:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default : return state;
  }
};
