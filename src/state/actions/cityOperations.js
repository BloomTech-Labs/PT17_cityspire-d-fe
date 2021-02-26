import axios from 'axios';

export const SAVE_CITY = 'SAVE_CITY';
export const UNSAVE_CITY = 'UNSAVE_CITY';
export const FETCHING_CITIES_START = 'FETCHING_CITY_START';
export const FETCHING_CITIES_SUCCESS = 'FETCHING_CITY_SUCCESS';
export const FETCHING_CITIES_ERROR = 'FETCHING_CITY_ERROR';

const url = 'https://labspt15-cityspire-g.herokuapp.com';

export const fetchSavedCity = profileId => {
  return async dispatch => {
    dispatch({ type: FETCHING_CITIES_START });

    try {
      const res = await axios.get(`${url}/profile/${profileId}/city`);

      dispatch({
        type: FETCHING_CITIES_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: FETCHING_CITIES_ERROR, payload: err });
    }
  };
};

export const saveCity = cityData => {
  return async dispatch => {
    try {
      const res = await axios.post(`${url}/city`, cityData);

      dispatch({
        type: SAVE_CITY,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const unsaveCity = (profileId, cityId) => {
  return async dispatch => {
    try {
      const res = await axios.delete(
        `${url}/profile/${profileId}/city/${cityId}`
      );

      dispatch({
        type: UNSAVE_CITY,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
