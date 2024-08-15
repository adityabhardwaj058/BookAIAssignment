import styled from "@emotion/styled";

const StyledTableContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  overflow: hidden;
  border: 1px solid #334155;
  border-radius: 0.5rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTable = styled.table`
  display: table;
  min-width: 465px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid #334155;
`;

const StyledTH = styled.th`
  display: table-cell;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  background-color: #6366f1;
  color: #fff;
  letter-spacing: 0.5px;
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #334155;
`;

const StyledTD = styled.td`
  display: table-cell;
  font-family: inherit;
  font-size: 1rem;
  font-weight: normal;
  color: #fff;
  letter-spacing: 0.5px;
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #334155;
`;

const samplePricingData = [
  { api: "OpenAI", model: "GPT-3.5", price: "$0.002" },
  { api: "OpenAI", model: "GPT-4", price: "$0.03" },
  { api: "Together AI", model: "Llama-2-70b", price: "$0.0008" },
  { api: "Together AI", model: "Llama-2-13b", price: "$0.0006" },
];

export const PriceTable = () => {
  return (
    <StyledTableContainer>
      <StyledTable>
        <thead
          style={{ display: "table-header-group", verticalAlign: "middle" }}
        >
          <tr style={{ display: "table-row", verticalAlign: "inherit" }}>
            <StyledTH>API</StyledTH>
            <StyledTH>MODEL</StyledTH>
            <StyledTH>Price Per 1K TOKENS</StyledTH>
          </tr>
        </thead>
        <tbody style={{ display: "table-row-group", verticalAlign: "middle" }}>
          {samplePricingData.map((data, index) => {
            return (
              <tr
                key={index}
                style={{ display: "table-row", verticalAlign: "inherit" }}
              >
                <StyledTD>{data.api}</StyledTD>
                <StyledTD>{data.model}</StyledTD>
                <StyledTD>{data.price}</StyledTD>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
};
