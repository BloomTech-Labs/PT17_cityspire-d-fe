import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const styles = {
  width: '100vw',
  height: 'calc(60vh - 80px)',
  position: 'absolute',
};

const MapboxGLMap = ({ lat, long }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const [coords] = useState({
    lat: lat,
    long: long,
  });

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic2xyb2JlcnRzIiwiYSI6ImNra2dkeGQxZDEzd2IydXFiYjcxdjM1bjcifQ.JOqAyBJD5qy6rIZjQkaaTw';

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [coords.lat, coords.long],
        zoom: 12,
      });

      let geocoder = new MapboxGeocoder({
        // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: false, // Do not use the default marker style
        placeholder: 'Search for Cities', // Placeholder text for the search bar
      });

      // Add the geocoder to the map
      map.addControl(geocoder);

      // Add geolocate control to the map.
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );

      map.on('load', () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, coords]);

  return (
    <>
      <div ref={el => (mapContainer.current = el)} style={styles} />
    </>
  );
};

export default MapboxGLMap;
