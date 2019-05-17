import React from "react";
import VendorCard from "./VendorCard";
import styled from "styled-components";

const VendorList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1140px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 930px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 690px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

const Vendors = props => {
  return (
    <VendorList>
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
    </VendorList>
  );
};

export default Vendors;
