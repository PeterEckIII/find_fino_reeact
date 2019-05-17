import React from "react";
import VendorCard from "../Cards/VendorCard";
import styles from "./Vendors.modules.css";

const VendorList = props => {
  return (
    <div className="VendorList">
      {props.vendorList.map(vendor => {
        return (
          <VendorCard
            key={vendor.address}
            name={vendor.name}
            type={vendor.type}
            address={vendor.address}
            city={vendor.city}
            state={vendor.state}
            zipCode={vendor.zipCode}
          />
        );
      })}
    </div>
  );
};

export default VendorList;
