import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Create a styled Link component instead of a button
const ExpButton = styled(Link)`
  background-color: #d65120;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none; /* Remove underline from Link */
  display: inline-block; /* Make it behave like a button */
  
  &:hover {
    background-color: black;
  }
`;

const ExploreButton = ({ to, text }) => <ExpButton to={to}>{text}</ExpButton>;

export default ExploreButton;
