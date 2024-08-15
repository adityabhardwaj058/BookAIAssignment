import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledHeader = styled.h2`
  color: #a5b4fc;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.25rem;
`;

export const Header2 = ({ value }) => {
  return <StyledHeader>{value}</StyledHeader>;
};

Header2.propTypes = {
  value: PropTypes.string.isRequired, // Required string
};
