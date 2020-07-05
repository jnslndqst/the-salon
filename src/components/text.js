import styled from "styled-components";

export default styled.label`
  font-family: ${(props) => props.font || "HelveticaNeue"};
  font-size: ${(props) => props.size || "15px"};
  font-weight: ${(props) => props.weight || "300"};
  font-stretch: normal;
  font-style: normal;
  line-height: ${(props) => props.lineHeight || "normal"};
  letter-spacing: ${(props) => props.letterSpacing || "normal"};
  text-align: ${(props) => props.textAlign || "left"};
  color: ${(props) => props.color || "#202020"};
  flex-shrink: 0;
`;
