import {
  FETCHING_CITIES_START,
  FETCHING_CITIES_SUCCESS,
  FETCHING_CITIES_ERROR,
  SAVE_CITY,
  UNSAVE_CITY,
} from '../actions';

const initialState = {
  isFetching: false,
  savedCities: [],
  isSaved: false,
  error: null,
};
export const cityOperationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CITY:
      return {
        ...state,
        savedCities: [...action.payload],
        isSaved: true,
      };
    case UNSAVE_CITY:
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
