import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledHeader = styled.h1`
  color: #a5b4fc;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Header1 = ({ value }) => {
  return <StyledHeader>{value}</StyledHeader>;
};

Header1.propTypes = {
  value: PropTypes.string.isRequired, // Required string
};
