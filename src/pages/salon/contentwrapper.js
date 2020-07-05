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
  display: flex;
  flex: 1;
  animation: ${fadein} 0.3s ease;
  flex-direction: column;
  justify-content: "flex-start"};
  align-items:  "flex-start"};
  padding: 0 15px 0 15px ;
`;
