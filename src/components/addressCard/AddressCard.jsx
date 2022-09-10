import React, { useMemo } from "react";
import { InfoCard } from "../infoCard/InfoCard";
import Map from "./Map";

export const AddressCard = ({ address }) => {
  const geo = useMemo(() => {
    return { lat: Number(address.geo.lat), lng: Number(address.geo.lng) };
  }, [address.geo.lat, address.geo.lng]);

  return (
    <div className=" card">
      <div className="card-body">
        <InfoCard
          title="Address"
          infos={{
            city: address.city,
            street: address.street,
            suite: address.suite,
            zipcode: address.zipcode,
          }}
        />

        <Map geo={geo} />
      </div>
    </div>
  );
};
