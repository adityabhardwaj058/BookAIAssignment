import "./App.css";
import styled from "@emotion/styled";
import { MainContent } from "./components/content/MainContent";
import { SubContent } from "./components/content/SubContent";
import { PriceTable } from "./components/table/table";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
  background-color: #1e293b;
  border: 1px solid #334155;
  border-radius: 1.5rem;
  padding: 2rem;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <StyledContainer>
      <MainContent header="API Pricing">
        Our API pricing is based on the model used and the number of tokens
        processed. Here is a breakdown of the costs:
      </MainContent>
      <PriceTable />
      <SubContent header="Token Estimation">
        On average, 1 token is approximately 4 characters or 0.75 words. For
        precise pricing, we recommend using our token calculator tool.
      </SubContent>
      <SubContent header="Billing">
        You will only be charged for the tokens used in generating the book. The
        API tracks token usage and bills accordingly. Detailed usage reports are
        available in your account dashboard.
      </SubContent>
    </StyledContainer>
  );
}

export default App;
