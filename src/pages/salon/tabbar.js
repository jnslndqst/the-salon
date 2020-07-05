import React from "react";
import styled from "styled-components";
import { Text, Row } from "components";

const Line = styled.div`
  background-color: #f9f9f9;
  height: 20px;
`;

const TabButton = styled.button`
  outline: none;
  cursor: pointer;
  background-color: inherit;
  border: none;
  padding: 16px 16px;
  transition: 0.3s;
  width: 50%;
  border-bottom: ${(props) =>
    props.active ? "solid 2px #b69f58" : "solid 0.5px #eeeeee"};
`;

export default function TabBar({ activeTab, onTabClick }) {
  return (
    <>
      <Row noPadding justifyContent="space-evenly" alignItems="center">
        <TabButton
          active={activeTab === 0}
          onClick={() => {
            onTabClick(0);
          }}
        >
          <Text>Info</Text>
        </TabButton>
        <TabButton
          active={activeTab === 1}
          onClick={() => {
            onTabClick(1);
          }}
        >
          <Text>Schema</Text>
        </TabButton>
      </Row>
      <Line />
    </>
  );
}
