import React from 'react';
import styled from "styled-components";

const Card = styled.div`
  list-style: none;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  text-align: center;
  border-radius: 10px;
  font-family: Roboto;
}
`

const VendorCard = (props) => {
    return (
        <Card>
                <br></br>
            <strong>{props.name}</strong>
                <br></br>
            <em>{props.type}</em>
                <br></br>
            {props.address}
                <br></br>
            {props.city},
            {props.state}
            {props.zipCode}
                <br></br>
                <br></br>
        </Card>
    )
}

export default VendorCard;