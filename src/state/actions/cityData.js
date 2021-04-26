import axios from 'axios';

export const FETCHING_CITY_START = 'FETCHING_CITY_START';
export const FETCHING_CITY_SUCCESS = 'FETCHING_CITY_SUCCESS';
export const FETCHING_CITY_ERROR = 'FETCHING_CITY_ERROR';

export const fetchCityData = cityInfo => {
  return async dispatch => {
    dispatch({ type: FETCHING_CITY_START });

    try {
      const cityData = axios.post(
        'https://d-ds-rev2.cityspire.dev/api/get_data',
        cityInfo
      );
      const weatherData = axios.post(
        'https://d-ds-rev2.cityspire.dev/api/get_current_temp',
        cityInfo
      );
      const positionData = axios.post(
        'https://d-ds-rev2.cityspire.dev/api/job_opportunities',
        cityInfo
      );
      console.log(positionData);
      const [cityRes, weatherRes] = await Promise.all([cityData, weatherData]);

      dispatch({
        type: FETCHING_CITY_SUCCESS,
        payload: { city: cityRes.data, temp: weatherRes.data },
      });
    } catch (err) {
      dispatch({ type: FETCHING_CITY_ERROR, payload: err.detail });
    }
  };
};
