import React, { useState, useEffect } from "react";
import { Page, BackButton, FilterButton, AppBar, Heading } from "components";
import SalonList from "./SalonList";
import PriceFilters from "./PriceFilters";
import { getSalons } from "api";

export default function Salons() {
  const [salons, setSalons] = useState([]);
  const [activeFilter, setActiveFilter] = useState({ from: 0, to: 9999 });
  const fetchData = async () => {
    const data = await getSalons();
    setSalons(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterSelected = (from, to) => {
    setActiveFilter({ from, to });
  };
  return (
    <Page>
      <AppBar>
        <BackButton color="#b69f58" />
        <Heading>Hår</Heading>
        <FilterButton />
      </AppBar>
      <PriceFilters onFilterSelected={handleFilterSelected} />
      <SalonList data={salons} filter={activeFilter} />
    </Page>
  );
}
