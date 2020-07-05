import styled, { keyframes } from "styled-components";

const DropDownContainer = styled("div")`
  width: 100%;
  margin: 0 auto;
`;

const fadein = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

const DropDownListContainer = styled("div")`
  position: relative;
  z-index: 100;
  animation: ${fadein} 0.3s ease;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  background: #ffffff;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export { DropDownContainer, DropDownListContainer, DropDownList };
