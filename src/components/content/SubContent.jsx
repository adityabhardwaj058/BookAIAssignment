import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Header2 } from "../headers/Header2";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
`;

const StyledParagraph = styled.p`
  font-family: inherit;
  font-size: 1rem;
  font-weight: normal;
  color: #fff;
`;

export const SubContent = ({ children, header }) => {
  return (
    <StyledContainer>
      <Header2 value={header} />
      <StyledParagraph>{children}</StyledParagraph>
    </StyledContainer>
  );
};

SubContent.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string.isRequired, // Required string
};
