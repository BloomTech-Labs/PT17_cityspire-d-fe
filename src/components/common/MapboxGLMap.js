import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

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
        mapboxApiAccessToken="pk.eyJ1Ijoic2xyb2JlcnRzIiwiYSI6ImNrbGppcTh2NTJzMWcybnF0bWo4M21mM2IifQ.84IfpleLAbG5RRLto8WHyA"
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
