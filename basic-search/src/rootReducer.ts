import * as actionTypes from "actionTypes";
import { combineReducers } from "redux";

export const initialState = {
  error: "",
  result: ""
};

const search = (state: any[] = [initialState], action: any) => {
  switch (action.type) {
    case actionTypes.SEARCH_HOST_REQUEST:
      return [
        ...state,
        {
          result: ""
        }
      ];
    case actionTypes.SEARCH_HOST_SUCCESS:
      return [
        ...state,
        {
          result: action.result
        }
      ];
    case actionTypes.SEARCH_HOST_FAILURE:
      return [
        ...state,
        {
          error: action.error
        }
      ];
    default:
      return state;
  }
};

export default combineReducers({ search });
