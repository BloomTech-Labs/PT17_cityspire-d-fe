import axios from 'axios';

export const FETCHING_CITY_START = 'FETCHING_CITY_START';
export const FETCHING_CITY_SUCCESS = 'FETCHING_CITY_SUCCESS';
export const FETCHING_CITY_ERROR = 'FETCHING_CITY_ERROR';

export const fetchCityData = cityInfo => {
  return async dispatch => {
    dispatch({ type: FETCHING_CITY_START });

    try {
      const res = await axios.post(
        `https://cityscape-203.eba-ijacxhm2.us-east-1.elasticbeanstalk.com/api/get_data`,
        cityInfo
      );

      dispatch({
        type: FETCHING_CITY_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: FETCHING_CITY_ERROR, payload: err.detail });
    }
  };
};
