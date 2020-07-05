import React from "react";
import SalonListItem from "./salonlistitem";
export default function SalonList({ data, filter }) {
  return (
    <div>
      {data.map((x, i) => {
        if (x.price >= filter.from && x.price <= filter.to) {
          return <SalonListItem key={i} {...x} />;
        }
        return null;
      })}
    </div>
  );
}
