import {
  FETCHING_CITY_START,
  FETCHING_CITY_SUCCESS,
  FETCHING_CITY_ERROR,
} from '../actions';

const initialState = {
  isFetching: false,
  error: '',
  city: {},
  currentTemp: 0,
  job_opportunities: 0,
};
export const cityDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CITY_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_CITY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        city: action.payload.city,
        currentTemp: action.payload.temp,
        job_opportunities: action.payload.job,
        error: '',
      };
    case FETCHING_CITY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
