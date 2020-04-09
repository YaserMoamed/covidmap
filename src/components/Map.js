import React, { useState } from 'react';
import MapGL from 'react-map-gl';

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 1.5,
    center: [0,20]
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/yasermoamd/ck8ss628a0tje1is5hydc3pob"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
}
export default Map;