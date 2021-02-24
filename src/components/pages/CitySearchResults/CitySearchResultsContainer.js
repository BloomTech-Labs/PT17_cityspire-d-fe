import React from 'react';
import { connect } from 'react-redux';
import { saveCity } from '../../../state/actions';
import RenderCitySearchResults from './RenderCitySearchResults';

function CitySearchResultsContainer({ cityData, saveCity }) {
  const handleOnSave = () => {
    const cityInfo = {
      city: cityData.city,
      state: cityData.state,
      rental_price: cityData.rental_price,
      crime: cityData.crime,
      air_quality_index: cityData.air_quality_index,
      walkability: cityData.walkability,
      livability: cityData.livability,
      profileId: localStorage.getItem('token'),
    };
    saveCity(cityInfo);
  };

  return (
    <>
      <RenderCitySearchResults
        cityData={cityData}
        handleOnSave={handleOnSave}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.cityData.isFetching,
    error: state.cityData.error,
    cityData: state.cityData.city,
  };
};
export default connect(mapStateToProps, { saveCity })(
  CitySearchResultsContainer
);
