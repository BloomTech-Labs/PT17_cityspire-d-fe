import React, { useState } from 'react';
import { mapboxConfig } from '../../utils/mapboxConfig';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp-worker';
mapboxgl.workerClass = 'worker-loader'.default;

const MapboxGLMap = ({ lat, long }) => {
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: long,
    zoom: 11,
  });

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={mapboxConfig.key}
        width="100%"
        height="50vh"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      />
    </>
  );
};

export default MapboxGLMap;
