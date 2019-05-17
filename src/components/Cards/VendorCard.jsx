import React from "react";
import styles from "./VendorCard.modules.css";

const VendorCard = props => {
  return (
    <div className="Card">
      <br />
      <strong>{props.name}</strong>
      <br />
      <em>{props.type}</em>
      <br />
      {props.address}
      <br />
      {props.city}, {props.state}&nbsp;
      {props.zipCode}
      <br />
      <br />
    </div>
  );
};

export default VendorCard;
