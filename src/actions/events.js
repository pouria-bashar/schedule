import * as ActionTypes from 'actionTypes';

export default function addEvent(eventItem) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.ADD_EVENT, payload: eventItem });
  };
}
