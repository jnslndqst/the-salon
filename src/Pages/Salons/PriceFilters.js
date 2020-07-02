import React, { useState } from "react";
import styled from "styled-components";
import {
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  Text,
  Row,
  IconWrapper,
} from "components";
import { DownIcon } from "assets/icons";

const Wrapper = styled.div`
  padding: 15px;
  border-top: solid 0.5px #b69f58;
  border-bottom: solid 0.5px #b69f58;
`;

const ListItem = styled("li")`
  display: flex;
  width: 100%;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 0.5em;
  &:hover ${Text} {
    background: #b69f58;
  }
`;

const ListContainer = styled(DropDownListContainer)`
  width: 100%;
  max-width: 1024px;
  left: 0;
`;
const prices = [
  {
    key: 0,
    label: "Visa alla priser",
    from: 0,
    to: 9999,
  },
  {
    key: 1,
    label: "Pris under 250 kr",
    from: 0,
    to: 249,
  },
  {
    key: 2,
    label: "Pris 250 - 500 kr",
    from: 250,
    to: 500,
  },
  {
    key: 3,
    label: "Pris över 500 kr",
    from: 501,
    to: 9999,
  },
];

export default function Filters({ onFilterSelected }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(prices[0]);

  const toggling = () => setIsOpen(!isOpen);
  const handleFilterSelected = (e) => {
    console.log(e.target);
    const key = parseInt(e.target.dataset.key);
    const filter = prices.find((x) => x.key === key);
    setActiveFilter(filter);
    toggling();
    onFilterSelected(filter.from, filter.to);
  };
  return (
    <Wrapper>
      <DropDownContainer>
        <Row onClick={toggling} noPadding alignItems="center">
          <Text>{activeFilter.label}</Text>
          <IconWrapper rotate={isOpen === true ? "true" : undefined}>
            <DownIcon />
          </IconWrapper>
        </Row>
        {isOpen && (
          <ListContainer>
            <DropDownList>
              {prices.map((price) => (
                <ListItem
                  data-key={price.key}
                  key={price.key}
                  onClick={handleFilterSelected}
                >
                  <Text data-key={price.key}>{price.label}</Text>
                </ListItem>
              ))}
            </DropDownList>
          </ListContainer>
        )}
      </DropDownContainer>
    </Wrapper>
  );
}
