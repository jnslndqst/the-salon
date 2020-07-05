import styled from "styled-components";

export default styled.h1`
  font-family: MillerBanner;
  font-size: 22px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.13px;
  text-align: ${(props) => props.textAlign || "center"};
  color: ${(props) => props.color || "#202020"};
  flex-shrink: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;
