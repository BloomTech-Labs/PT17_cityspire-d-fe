import {
  FETCHING_CITY_START,
  FETCHING_CITY_SUCCESS,
  FETCHING_CITY_ERROR,
} from '../actions';

const initialState = {
  isFetching: false,
  error: '',
  city: {},
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
        city: action.payload,
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
