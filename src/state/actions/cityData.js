export const FETCHING_CITY_START = 'FETCHING_CITY_START';
export const FETCHING_CITY_SUCCESS = 'FETCHING_CITY_SUCCESS';
export const FETCHING_CITY_ERROR = 'FETCHING_CITY_ERROR';

export const fetchCityData = city => dispatch => {
  dispatch({ type: FETCHING_CITY_START });
};
