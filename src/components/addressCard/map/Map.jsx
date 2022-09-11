import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const Map = ({ geo }) => {
  const googleMapsApiKey = process.env.GOOGLE_MAP_KEY;
  const containerStyle = {
    width: "100%",
    height: "200px",
  };
  return (
    <div className="w-100">
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          center={geo}
          zoom={1}
          mapContainerStyle={containerStyle}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(Map);
