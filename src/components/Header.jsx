import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  font-family: Roboto;
`;

const Header = props => {
  return <Heading>{props.title}</Heading>;
};

export default Header;
