import React from "react";
import styled from "styled-components";
import {
  BackButton,
  LikeButton,
  Text,
  AppBar,
  Rating,
  Column,
  Heading,
} from "components";
import backgroundImage from "assets/images/salon.png";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 1024px;
  height: 16rem;
  background: linear-gradient(transparent, transparent, #000);
`;

const TopImage = styled.img`
  display: block;
  width: 100%;
  height: 16rem;
  object-fit: cover;
`;

const TitleWrapper = styled(Column)`
  position: absolute;
  bottom: 15px;
  left: 15px;
`;
export default function Header({ name, avergeRating, numberOfRatings }) {
  return (
    <>
      <TopImage alt={name} src={backgroundImage} />
      <Overlay>
        <AppBar backgroundColor="transparent">
          <BackButton color="#ffffff" />
          <Text></Text>
          <LikeButton />
        </AppBar>
        <TitleWrapper>
          <Heading color="#ffffff">{name}</Heading>
          <Rating
            value={avergeRating}
            count={numberOfRatings}
            textColor="#ffffff"
            size="L"
          />
        </TitleWrapper>
      </Overlay>
    </>
  );
}
