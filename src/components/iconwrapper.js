import styled from "styled-components";

export default styled.span`
  margin-right: ${(props) => props.marginRight || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  display: flex;
  align-items: center;
  transition: all 0.2s ease-out;
  transform: ${(props) => (props.rotate ? `rotate(180deg)` : "")};
`;
