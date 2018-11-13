import * as actionTypes from "actionTypes";
import axios from "axios";

export const searchHostRequest = () => ({
  type: actionTypes.SEARCH_HOST_REQUEST
});

export const searchHostSuccess = (host: string) => ({
  host,
  type: actionTypes.SEARCH_HOST_SUCCESS
});

export const searchHostFailure = (error: string) => ({
  error,
  type: actionTypes.SEARCH_HOST_FAILURE
});

export function searchAsync() {
  return async (dispatch: any) => {
    dispatch(searchHostRequest());

    try {
      const res = await axios.get(`https://github.com/asuforce.keys`);

      dispatch(searchHostSuccess(res.data));
    } catch (err) {
      dispatch(searchHostFailure(err));
    }
  };
}
