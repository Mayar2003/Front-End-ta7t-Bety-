import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { getAddressFromGoogle } from "./services/location_service";
import useCurrentLocation from "../Hooks/useCurrentLocation";
import ApiManager from "../ApiManager/ApiManager";
import { useNavigate } from "react-router-dom";

/*******************
 *  COLOR PALETTE  *
 *******************/
const colors = {
  primary: "#15243F", // dark navy – headers / tooltip background
  secondary: "#3a4d6F", // blue-grey – icons
  lightBlue: "#99a8c2",
  extraLite: "#cfd9e9",
  black: "#000000",
  white: "#ffffff",
  gray: "#c4cbd9",
  orange: "#f04a4a", // brand accent
  peach: "#fdd8c7", // CTA background (Deliver Here)
};

/*******************
 *  MAP SETTINGS   *
 *******************/
const MAP_CONTAINER_STYLE = {
  width: "100%",
  height: "300px", // fixed height inside modal
};

const DEFAULT_CENTER = { lat: 26.820553, lng: 30.802498 }; // Egypt centre

export default function LocationPickerModal() {
  /********** hooks **********/
  const navigate = useNavigate();
  const mapRef = useRef(null);
const [selectedLocation, setSelectedLocation] = useState(null);
const [selectedAddress, setSelectedAddress] = useState("");

  const [center, setCenter] = useState(DEFAULT_CENTER); // مركز الخريطة الحالي
  const [address, setAddress] = useState(""); // النص المعروض في حقل العنوان
  const [loading, setLoading] = useState(false); // حالة زر الحفظ

  // تحميل Google Maps JS
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCRPNK-P7r5x4_xTU8W56iVh8sfy8Yg0Jg", // TODO: move to .env
  });

  // موقع الجهاز الحالي
  const { location, fetchLocation } = useCurrentLocation();

  /* عند توفر الموقع لأول مرة أو تغيّره */
  useEffect(() => {
    if (isLoaded && location) {
      setCenter(location);
      reverseGeocode(location);
      if (mapRef.current) {
        mapRef.current.panTo(location);
        mapRef.current.setZoom(17);
      }
    }
  }, [isLoaded, location]);

  /********* helpers *********/
  const reverseGeocode = async ({ lat, lng }) => {
  const addr = await getAddressFromGoogle(lat, lng);
  setAddress(addr);
};



  /********* map callbacks *********/
  const handleMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handleMapIdle = useCallback(() => {
  if (!mapRef.current) return;
  const gCenter = mapRef.current.getCenter();
  const coords = { lat: gCenter.lat(), lng: gCenter.lng() };
  reverseGeocode(coords);
  // لاحظ: من غير setCenter(coords)
}, []);



  /********* UI actions *********/
  const handleRecenter = () => {
    if (location && mapRef.current) {
      mapRef.current.panTo(location);
    } else {
      fetchLocation();
    }
  };

 const handleConfirm = async () => {
  if (!mapRef.current || !address) return;
  const center = mapRef.current.getCenter();
  const coords = { lat: center.lat(), lng: center.lng() };

  setLoading(true);
  try {
    const payload = {
      locations: [
        {
          coordinates: {
            type: "Point",
            coordinates: [coords.lng, coords.lat],
          },
          address,
          isFavorite: true,
        },
      ],
    };
    await ApiManager.updateMe(payload);
    alert("Location saved successfully");
    navigate("/");
  } catch (err) {
    alert("Error saving location");
  } finally {
    setLoading(false);
  }
};


  /********* RENDER *********/
  if (!isLoaded) return <div className="p-6 text-center">Loading map…</div>;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      {/* Modal Container */}
      <div className="w-[90%] max-w-lg bg-white rounded-xl shadow-lg overflow-hidden relative">
        {/* Close icon */}
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-800"
          onClick={() => navigate(-1)}
        >
          ×
        </button>

        {/* Header */}
        <h2
          className="text-center text-lg font-semibold py-4"
          style={{ backgroundColor: colors.primary, color: colors.white }}
        >
          Delivery Address
        </h2>

        {/* Search input */}
        <div className="p-4 pt-5">
          <input
            className="w-full p-3 rounded-md border shadow-sm text-sm"
            placeholder="Search Road or Landmark"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              backgroundColor: colors.extraLite,
              borderColor: colors.gray,
              color: colors.black,
            }}
          />
        </div>

        {/* Map Wrapper */}
        <div className="relative px-4 pb-4">
          {/* Google Map */}
          <div style={{ width: "100%", height: "300px", position: "relative" }}>
  {/* الخريطة */}
  <GoogleMap
    mapContainerStyle={{ width: "100%", height: "100%" }}
    center={center}
    zoom={17}
    onLoad={handleMapLoad}
    onIdle={handleMapIdle}
    options={{
      disableDefaultUI: true,
      zoomControl: true,
      streetViewControl: false,
    }}
  />

  {/* الماركر الثابت */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -100%)",
      pointerEvents: "none",
      fontSize: "30px",
      color: colors.orange,
      zIndex: 10, // مهم جدااا
    }}
  >
    📍
  </div>
  
</div>



          {/* Tooltip */}
          <div
            className="absolute top-[60%] left-1/2 transform -translate-x-1/2 bg-[var(--tooltip-bg)] text-white text-xs p-3 rounded-md shadow-lg w-[80%] text-center"
            style={{ backgroundColor: colors.primary }}
          >
            Move the map to match the pin to your exact delivery location
          </div>

          {/* Re-Center Floating Button
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full shadow-md flex items-center justify-center"
            style={{ backgroundColor: colors.white }}
            onClick={handleRecenter}
          >
            <i className="fas fa-location-arrow" style={{ color: colors.secondary }}></i>
          </button> */}
        </div>

        {/* Confirm Button */}
        <div className="p-4">
          <button
            className="w-full py-3 rounded-lg font-bold"
            style={{
              backgroundColor: colors.peach,
              color: colors.black,
              opacity: loading ? 0.6 : 1,
            }}
            onClick={handleConfirm}
            disabled={loading}
          >
            {loading ? "Saving…" : "Deliver Here"}
          </button>
        </div>
      </div>
    </div>
  );
}
