import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCityData, saveCity, unsaveCity } from '../../../state/actions';
import RenderCitySearchResults from './RenderCitySearchResults';
import { Spin } from 'antd';
import { Header, Footer } from '../../common/';

const spinStyle = {
  textAlign: 'center',
  position: 'absolute',
  top: '46%',
  width: '100%',
  margin: 'auto',
};

function CitySearchResultsContainer({
  cityData,
  fetchCityData,
  saveCity,
  unsaveCity,
  isFetching,
  isSaved,
  savedCities,
}) {
  const { push } = useHistory();

  useEffect(() => {
    fetchCityData(localStorage.getItem('cityAndState'));
  }, [fetchCityData]);

  const handleSaveCity = () => {
    const cityInfo = {
      city: cityData.city,
      state: cityData.state,
      rental_price: cityData.rental_price,
      crime: cityData.crime,
      air_quality_index: cityData.air_quality_index,
      walkability: cityData.walkability,
      livability: cityData.livability,
      population: cityData.population,
      diversity_index: cityData.diversity_index,
      profile_id: localStorage.getItem('token'),
    };
    saveCity(cityInfo);
  };

  const handleRemoveCity = () => {
    unsaveCity(savedCities.id);
  };

  const handleOnCityClick = cityAndState => {
    fetchCityData(cityAndState);
    push(`/${cityAndState.city}-${cityAndState.state}`);
  };

  return (
    <>
      {isFetching ? (
        <div style={spinStyle}>
          <Spin tip="Loading..." size="large"></Spin>
        </div>
      ) : (
        <div>
          <Header />
          <RenderCitySearchResults
            cityData={cityData}
            handleSaveCity={handleSaveCity}
            handleRemoveCity={handleRemoveCity}
            isSaved={isSaved}
            handleOnCityClick={handleOnCityClick}
          />
          <Footer />
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.cityData.isFetching,
    error: state.cityData.error,
    cityData: state.cityData.city,
    savedCities: state.cityOperations.savedCities,
    isSaved: state.cityOperations.isSaved,
  };
};
export default connect(mapStateToProps, {
  fetchCityData,
  saveCity,
  unsaveCity,
})(CitySearchResultsContainer);
