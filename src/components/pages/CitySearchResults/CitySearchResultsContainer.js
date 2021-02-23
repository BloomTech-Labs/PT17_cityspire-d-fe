import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCityData, saveCity } from '../../../state/actions';
import RenderCitySearchResults from './RenderCitySearchResults';
import { Spin } from 'antd';

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
  isFetching,
}) {
  useEffect(() => {
    fetchCityData(localStorage.getItem('cityAndState'));
  }, [fetchCityData]);

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
      {isFetching ? (
        <div style={spinStyle}>
          <Spin tip="Loading..." size="large"></Spin>
        </div>
      ) : (
        <RenderCitySearchResults
          cityData={cityData}
          handleOnSave={handleOnSave}
        />
      )}
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
export default connect(mapStateToProps, { fetchCityData, saveCity })(
  CitySearchResultsContainer
);
