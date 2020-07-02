import styled, { keyframes } from "styled-components";

const fadein = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export default styled.div`
  max-width: 1024px;
  margin: 0 auto;
  animation: ${fadein} 0.3s ease;
`;
