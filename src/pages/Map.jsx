import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Outlet} from "react-router-dom";

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '94vh',
};
const center = {
  lat: 55.8617, // default latitude
  lng: -4.2583, // default longitude
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAbtWSKRM5IV53xhrqkHk6rUMAMEbjmw6U',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <>
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
    <Outlet/>
    </>
  );
};

export default Map;