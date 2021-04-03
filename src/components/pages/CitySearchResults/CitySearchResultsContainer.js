import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCityData, pinCity, fetchSavedCity } from '../../../state/actions';
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

const CitySearchResultsContainer = ({
  cityData,
  fetchCityData,
  fetchSavedCity,
  pinCity,
  isFetching,
  isSaved,
}) => {
  const { push } = useHistory();

  const [cityAndState, setCityAndState] = useState(
    localStorage.getItem('cityAndState')
  );

  useEffect(() => {
    fetchCityData(cityAndState);
  }, [fetchCityData, cityAndState]);

  const savedNotification = () => {
    notification.open({
      message: 'City Pinned',
      description: `${cityData.city.city}, ${cityData.city.state}, has been pinned and can be viewed on the Pinned Cities page.`,
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
      latitude: cityData.latitude,
      longitude: cityData.longitude,
      profile_id: localStorage.getItem('token'),
    };
    pinCity(localStorage.getItem('token'), cityInfo);
    savedNotification();
    fetchSavedCity(localStorage.getItem('token'));
    push(`/pinned/${cityInfo.state}/${cityInfo.city}`);
  };

  const handleOnCityClick = cityAndState => {
    localStorage.setItem('cityAndState', JSON.stringify(cityAndState));
    setCityAndState(localStorage.getItem('cityAndState'));
    push(`/${cityAndState.state}/${cityAndState.city}`);
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
            isSaved={isSaved}
            handleOnCityClick={handleOnCityClick}
            city={cityAndState.city}
            state={cityAndState.state}
          />
          <Footer />
        </div>
      )}
    </>
  );
};

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
  pinCity,
})(CitySearchResultsContainer);
