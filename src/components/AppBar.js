import styled from "styled-components";

export default styled.div`

  display: flex;
  flex: 1,
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 13px 13px 13px 13px;
  background-color: ${(props) =>
    props.backgroundColor || "rgba(255, 255, 255, 0.9)"};
`;

//backdrop-filter: blur(10px);
