import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSalon } from "api";
import { Page } from "components";
import Header from "./Header";
import TabBar from "./TabBar";
import Info from "./Info";
import Schema from "./Schema";
import ContentWrapper from "./ContentWrapper";

export default function Salon() {
  let { id } = useParams();
  const [salon, setSalon] = useState();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const fetchData = async (id) => {
    const data = await getSalon(id);
    setSalon(data);
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  if (!salon) return null;
  return (
    <Page>
      <Header {...salon} />
      <TabBar activeTab={activeTabIndex} onTabClick={handleTabClick} />
      <ContentWrapper>
        {activeTabIndex === 0 ? <Info {...salon} /> : <Schema {...salon} />}
      </ContentWrapper>
    </Page>
  );
}
