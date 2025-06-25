import React, { useState, useRef, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { getAddressFromGoogle  } from "./services/location_service";
import useCurrentLocation from "../Hooks/useCurrentLocation";
import MapsAppBar from "./components/maps_app_bar";
import LowerWidget from "./components/lower_widget";
import useUser from "../Hooks/useUser";
import { useNavigate } from "react-router-dom";
import ApiManager from "../ApiManager/ApiManager";
import { useEffect } from "react";
const colors = {
  primary: "#15243F",
  secondary: "#3a4d6F",
  lightBlue: "#99a8c2",
  extraLite: "#cfd9e9",
  black: "#000000",
  white: "#ffffff",
  gray: "#c4cbd9",
  orange: "#f04a4a",
};

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 26.820553,
  lng: 30.802498,
};

export default function DisplayMap() {
  const navigate = useNavigate();
  const user = useUser();
  const [currentPosition, setCurrentPosition] = useState(center);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCRPNK-P7r5x4_xTU8W56iVh8sfy8Yg0Jg",
  });

  const { location, fetchLocation } = useCurrentLocation();
useEffect(() => {
  if (isLoaded && location && mapRef.current) {
    mapRef.current.panTo(location);
    mapRef.current.setZoom(18);
    setCurrentPosition(location);

    (async () => {
      setLoading(true);
      const addr = await getAddressFromGoogle(location.lat, location.lng);
      setAddress(addr);
      setLoading(false);
    })();
  }
}, [isLoaded, location]);

  const handleLoad = useCallback((map) => {
    mapRef.current = map;
    if (location) {
      map.panTo(location);
    }
  }, [location]);

  const handleCameraChanged = useCallback(async () => {
    if (!mapRef.current) return;
    const center = mapRef.current.getCenter();
    const lat = center.lat();
    const lng = center.lng();
    setCurrentPosition({ lat, lng });
    setLoading(true);
const addr = await getAddressFromGoogle(lat, lng);
    setAddress(addr);
    setLoading(false);
  }, []);

  const handleConfirm = async () => {
    if (!currentPosition || !address) return;
    setLoading(true);
    try {
      const payload = {
        locations: [
          {
            coordinates: {
              type: "Point",
              coordinates: [currentPosition.lng, currentPosition.lat],
            },
            address: address,
            isFavorite: true,
          },
        ],
      };
      await ApiManager.updateMe(payload);
      setLoading(false);
      alert("Location saved successfully");
      navigate("/");
    } catch (err) {
      alert("Error saving location");
      setLoading(false);
    }
  };

  const handleRecenter = () => {
    if (location && mapRef.current) {
      mapRef.current.panTo(location);
    } else {
      fetchLocation();
    }
  };

  if (!isLoaded) return <div>Loading map...</div>;
return (
  <div className="w-full h-screen relative bg-white overflow-hidden">
    {/* الخريطة */}


    {/* AppBar */}
    <div className="absolute top-0 left-0 right-0 z-20">
      <MapsAppBar isLoading={loading} onBack={() => navigate(-1)} />
    </div>
    <div className="absolute top-[80px] left-0 right-0 h-[60vh] z-0">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          onLoad={handleLoad}
          onDragEnd={handleCameraChanged}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
          }}
          children={ <div className="absolute top-[calc(80px+30vh)] left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none z-10">
      <i className="fas fa-map-marker-alt text-4xl" style={{ color: colors.secondary }} />
    </div>}
    
        />
      )}
    </div>

    {/* Address input */}
    <div className="absolute top-[80px] left-0 right-0 px-4 z-20">
      <input
        className="w-full p-3 border rounded shadow text-lg mt-4"
        style={{
          backgroundColor: colors.extraLite,
          color: colors.black,
          borderColor: colors.gray,
        }}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
      />
    </div>

    {/* Bottom Widget */}
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <LowerWidget
        isLoading={loading}
        onRecenter={handleRecenter}
        onConfirm={handleConfirm}
      />
    </div>
  </div>
);

}