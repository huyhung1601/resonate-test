import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const Map = ({ geo }) => {
  const containerStyle = {
    width: "100%",
    height: "200px",
  };
  return (
    <div className="w-100">
      <LoadScript googleMapsApiKey="AIzaSyCI8_Ko2BNbAclrNjO1pVG6i5Foyy8Vhq0">
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
