import {
  FETCHING_CITIES_START,
  FETCHING_CITIES_SUCCESS,
  FETCHING_CITIES_ERROR,
  PIN_CITY,
  UNPIN_CITY,
} from '../actions';

const initialState = {
  isFetching: false,
  savedCities: [],
  isSaved: false,
  error: null,
};
export const cityOperationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PIN_CITY:
      return {
        ...state,
        savedCities: [action.payload],
        isSaved: true,
      };
    case UNPIN_CITY:
      return {
        ...state,
        savedCities: state.savedCities.filter(city => {
          return city.id !== action.payload;
        }),
        isSaved: false,
      };

    case FETCHING_CITIES_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_CITIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        savedCities: [action.payload],
      };
    case FETCHING_CITIES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
