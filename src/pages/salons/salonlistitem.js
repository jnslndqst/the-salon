import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Text, Rating, Row, Column } from "components";
import { ArrowIcon } from "assets/icons";
const Container = styled(Link)`
  display: flex;
  flex: 1;
  justify-content: flex-start;

  padding-bottom: 7px;
  padding-top: 15px;
  padding-right: 15px;
  padding-left: 15px;
  border-bottom: solid 0.5px #eeeeee;
  text-decoration: none;
`;

export default function SalonListItem({
  id,
  name,
  avergeRating,
  numberOfRatings,
  price,
  currency,
  duration,
  address,
}) {
  return (
    <Container to={`/salon/${id}`}>
      <Column>
        <Row margin="0.21em 0 0 0" alignItems="flex-start">
          <Text>{"12:00"}</Text>
        </Row>
      </Column>
      <Column flex={6}>
        <Row alignItems="flex-start">
          <Text font="MillerBanner" size="20px">
            {name}
          </Text>
        </Row>
        <Row>
          <Rating value={avergeRating} count={numberOfRatings} />
        </Row>
        <Row>
          <Text color="#666666">{`${address.street} ${address.streetNumber}`}</Text>
        </Row>
      </Column>
      <Column>
        <Row margin="0.21em 0 0 0">
          <Text weigth="normal">
            {price} {currency}
          </Text>
        </Row>
        <Row>
          <Text size="13px" color="#666666">
            {duration}
          </Text>
        </Row>
        <Row />
      </Column>
      <Column noPadding alignItems="flex-end">
        <Row alignItems="center">
          <ArrowIcon color="#b69f58" />
        </Row>
      </Column>
    </Container>
  );
}
