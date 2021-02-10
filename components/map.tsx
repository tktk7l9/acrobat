import React from "react";
import GoogleMapReact from 'google-map-react';

export default function Create({ targetLat, targetLng }: { targetLat: string, targetLng: string }) {
    const defaultLatLng = {
      lat: 35.7022589,
      lng: 139.7744733,
    };
  
    const handleApiLoaded = ({ map, maps }) => {
      new maps.Marker({
        map,
        position: defaultLatLng,
      });
    };
  
    return (
      <div style={{ height: '400px', width: '600px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
          defaultCenter={defaultLatLng}
          defaultZoom={16}
          onGoogleApiLoaded={handleApiLoaded}
        />
      </div>
    );
  }