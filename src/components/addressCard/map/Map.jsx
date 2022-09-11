import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const Map = ({ geo }) => {
  //put your googleMapsApiKey here
  const googleMapsApiKey = "AIzaSyCI8_Ko2BNbAclrNjO1pVG6i5Foyy8Vhq0";
  const containerStyle = {
    width: "100%",
    height: "300px",
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
