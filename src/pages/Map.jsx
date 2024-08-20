import React from 'react';
import { GoogleMap, useLoadScript, Marker, Circle } from '@react-google-maps/api';
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
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
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
        <Circle
          radius={2000}
          center={center}
          strokeColor={'#0c4cb3'}
          strokeOpacity={1}
          strokeWeight={3}
          fillColor={'#3b82f6'}
          fillOpacity={0.3}
        />
      </GoogleMap>
      
    </div>
    <Outlet/>
    </>
  );
};

export default Map;