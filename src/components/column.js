import styled from "styled-components";

export default styled.div`
  display: flex;
  flex: ${(props) => props.flex || "1"};
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  padding: ${(props) => (props.noPadding ? "0" : "0 15px 0 0")};
`;
