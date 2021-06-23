import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.span`
  font-size: 13px;
  letter-spacing: 0.15em;
  color: goldenrod;
`;

const Star = ({ rating }) => {
  let ratingStar = "";
  let star = "★";
  for (let i = 1; i <= rating; i++) {
    ratingStar += star;
  }
  if (`${rating}`.split(".").length > 1) {
    ratingStar += "☆";
  }

  return <Container>{ratingStar}</Container>;
};

Star.prototype = {
  rating: PropTypes.number.isRequired,
};

export default Star;
