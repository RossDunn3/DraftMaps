import React from 'react';
import { GoogleMap, useLoadScript, MarkerF, CircleF } from '@react-google-maps/api';
import { Outlet} from "react-router-dom";
import Data from '../backend/data.json'

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '94vh',
};
const center = {
  lat: 55.8617, // default latitude
  lng: -4.2583, // default longitude
};


const glasgow_east = {
  lat: 55.8537, 
  lng: -4.2055
 };
 const glasgow_west = {
  lat: 55.8753, 
  lng: -4.2917
 };
 const glasgow_north = {
  lat: 55.8895, 
  lng: -4.2413
 };
 const glasgow_south = {
  lat: 55.8367, 
  lng: -4.2733
 };
 const glasgow_centre = {
  lat: 55.8609, 
  lng: -4.2548
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
        {
          Data.results.map(bar => (
            <MarkerF 
              position ={{lat: bar.geometry.location.lat, lng: bar.geometry.location.lng}}
            />
          ))
        }
        
        
        <CircleF
          radius={1200}
          center={glasgow_centre}
          strokeColor={'#0c4cb3'}
          strokeOpacity={1}
          strokeWeight={3}
          fillColor={'#3b82f6'}
          fillOpacity={0.3}
        />
        
        {/* <CircleF
          radius={2000}
          center={glasgow_east}
          strokeColor={'#0c4cb3'}
          strokeOpacity={1}
          strokeWeight={3}
          fillColor={'#3b82f6'}
          fillOpacity={0.3}
        />
        <CircleF
          radius={2000}
          center={glasgow_west}
          strokeColor={'#0c4cb3'}
          strokeOpacity={1}
          strokeWeight={3}
          fillColor={'#3b82f6'}
          fillOpacity={0.3}
        />
        <CircleF
          radius={2000}
          center={glasgow_north}
          strokeColor={'#0c4cb3'}
          strokeOpacity={1}
          strokeWeight={3}
          fillColor={'#3b82f6'}
          fillOpacity={0.3}
        />
        <CircleF
          radius={2000}
          center={glasgow_south}
          strokeColor={'#0c4cb3'}
          strokeOpacity={1}
          strokeWeight={3}
          fillColor={'#3b82f6'}
          fillOpacity={0.3}
        /> */}
      </GoogleMap>
      
    </div>
    <Outlet/>
    </>
  );
};

export default Map;