import React from "react";
import styled from "styled-components";
import OpeningHours from "./openinghours";
import { Row, Text, IconWrapper } from "components";
import { PinIcon, ClockIcon, GlobeIcon, PhoneIcon } from "assets/icons";
const ContentRow = styled(Row)`
  padding: 13px 0 13px 0;
  justify-content: flex-start;
  align-items: center;
  border-bottom: ${(props) => props.borderBottom || "solid 0.5px #eeeeee"};
`;

function formatAddress(address) {
  return `${address.street} ${address.streetNumber}, ${address.zipCode} ${address.city}`;
}
export default function Info(props) {
  const { address, openingHours, phone, web, desc } = props;
  return (
    <>
      {address && (
        <ContentRow>
          <IconWrapper marginRight="10px">
            <PinIcon />
          </IconWrapper>
          <Text>{formatAddress(address)}</Text>
        </ContentRow>
      )}
      {openingHours && (
        <ContentRow>
          <IconWrapper marginRight="10px">
            <ClockIcon />
          </IconWrapper>
          <OpeningHours days={openingHours} />
        </ContentRow>
      )}
      {phone && (
        <ContentRow>
          <IconWrapper marginRight="10px">
            <PhoneIcon />
          </IconWrapper>
          <Text>{phone}</Text>
        </ContentRow>
      )}
      {web && (
        <ContentRow>
          <IconWrapper marginRight="10px">
            <GlobeIcon />
          </IconWrapper>
          <Text>{web}</Text>
        </ContentRow>
      )}
      {desc && (
        <ContentRow borderBottom="none">
          <Text style={{ width: "100%" }}>{desc}</Text>
        </ContentRow>
      )}
    </>
  );
}
