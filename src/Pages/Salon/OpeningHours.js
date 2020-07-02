import React, { useState } from "react";
import styled from "styled-components";
import {
  Row,
  Text,
  IconWrapper,
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
} from "components";
import { DownIcon } from "assets/icons";

const ListItem = styled("li")`
  display: flex;
  width: 10em;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 0.5em;
`;

function getWeekDay() {
  const day = new Date().getDay();
  if (day === 0) return 6;
  return day - 1;
}

export default function OpeningHours({ days }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const today = getWeekDay();

  let headerText;
  if (!days[today]?.to) {
    headerText = `Stängt idag`;
  } else {
    headerText = `Öppet till ${days[today].to} idag`;
  }

  return (
    <DropDownContainer>
      <Row
        onClick={toggling}
        noPadding
        justifyContent="flex-start"
        alignItems="center"
      >
        <Text>{headerText}</Text>
        <IconWrapper
          rotate={isOpen === true ? "true" : undefined}
          marginLeft="10px"
        >
          <DownIcon />
        </IconWrapper>
      </Row>

      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {days.map((day) => (
              <ListItem key={Math.random()}>
                <Text>{`${day.weekDay}`}</Text>
                <Text>{!day.to ? "Stängt" : `${day.from}-${day.to}`}</Text>
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
