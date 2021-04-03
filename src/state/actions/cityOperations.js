import axios from 'axios';

export const PIN_CITY = 'PIN_CITY';
export const UNPIN_CITY = 'UNPIN_CITY';
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
      dispatch({ type: FETCHING_CITIES_ERROR, payload: err.message });
    }
  };
};

export const pinCity = (profileId, cityData) => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `${url}/profile/${profileId}/city`,
        cityData
      );

      dispatch({
        type: PIN_CITY,
        payload: res.data,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const unpinCity = (profileId, cityId) => {
  return async dispatch => {
    try {
      const res = await axios.delete(
        `${url}/profile/${profileId}/city/${cityId}`
      );

      dispatch({
        type: UNPIN_CITY,
        payload: res.data,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
};
