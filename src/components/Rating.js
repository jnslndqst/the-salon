import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import Row from "./Row";
const Star = ({ isFilled, size }) => {
  let radius = size === "L" ? 12 : 9;
  return (
    <span style={{ marginRight: 4.1, marginTop: 1 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={radius}
        height={radius}
        viewBox="0 0 9 9"
      >
        <path
          fill={isFilled ? "#B69F58" : "#FFFFFF"}
          fillRule="evenodd"
          stroke="#B69F58"
          strokeWidth=".5"
          d="M4.15 6.545L1.585 7.894l.49-2.856L0 3.015 2.868 2.6 4.15 0l1.283 2.599 2.867.416-2.075 2.023.49 2.856z"
        />
      </svg>
    </span>
  );
};

export default function Rating({ value, count, textColor, size }) {
  return (
    <Row noPadding alignItems={size === "L" ? "center" : "baseline"}>
      {[...Array(5).keys()].map((x) => {
        return <Star key={x} isFilled={x < value} size={size} />;
      })}
      {count && (
        <Text
          size={size === "L" ? "13px" : "11px"}
          color={textColor || "#656565"}
          textAlign="right"
          letterSpacing="-0.07px"
        >
          ({count})
        </Text>
      )}
    </Row>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  textColor: PropTypes.string,
  size: PropTypes.string,
};
