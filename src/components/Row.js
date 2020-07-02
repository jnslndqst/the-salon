import styled from "styled-components";

export default styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => (props.noPadding ? "0" : "0 0 8px 0")};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "baseline"};
`;
