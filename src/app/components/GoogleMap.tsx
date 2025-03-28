import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

export default function GoogleMapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ['places']
  });

  const [location, setLocation] = useState({
    lat: 16.43524073168138,  // พิกัด The Base Condo
    lng: 102.82653473812593
  });

  const [showInfo, setShowInfo] = useState(false);

  if (!isLoaded) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <GoogleMap
        zoom={15}
        center={location}
        mapContainerClassName="w-full h-[400px] rounded-lg shadow-lg"
        options={{
          zoomControl: true,
          streetViewControl: true,
          mapTypeControl: true,
          fullscreenControl: true,
        }}
      >
        <Marker
          position={location}
          animation={google.maps.Animation.DROP}
          onClick={() => setShowInfo(true)}
        />
        {showInfo && (
          <InfoWindow
            position={location}
            onCloseClick={() => setShowInfo(false)}
          >
            <div className="p-2">
              <h3 className="font-bold text-lg">The Base Condo</h3>
              <p className="text-sm">ถนนมิตรภาพ</p>
              <p className="text-sm">อำเภอเมืองขอนแก่น</p>
              <p className="text-sm">จังหวัดขอนแก่น 40000</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
} 