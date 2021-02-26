import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchCityData,
  fetchSavedCity,
  saveCity,
  unsaveCity,
} from '../../../state/actions';
import RenderCitySearchResults from './RenderCitySearchResults';
import { Spin, notification } from 'antd';
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
  fetchSavedCity,
}) {
  const { push } = useHistory();

  useEffect(() => {
    fetchCityData(localStorage.getItem('cityAndState'));
  }, [fetchCityData]);

  const savedNotification = () => {
    notification.open({
      message: 'City Pinned',
      description: `${cityData.city.city}, ${cityData.city.state}, has been pinned and can be viewed on the Pinned Cities page.`,
    });
  };

  const deleteNotification = () => {
    notification.open({
      message: 'City Removed',
      description: `${cityData.city.city}, ${cityData.city.state}, has been has been removed from Pinned Cities.`,
    });
  };

  const handleSaveCity = () => {
    const cityInfo = {
      city: cityData.city.city,
      state: cityData.city.state,
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
    savedNotification();
  };

  const handleRemoveCity = id => {
    fetchSavedCity(localStorage.getItem('token'));
    unsaveCity(localStorage.getItem('token'), id);
    deleteNotification();
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
  fetchSavedCity,
  saveCity,
  unsaveCity,
})(CitySearchResultsContainer);
