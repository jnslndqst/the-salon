import React from "react";
import { useHistory } from "react-router-dom";

export default function BackButton({ color }) {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <div onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="19"
        viewBox="0 0 11 19"
      >
        <path
          fill="none"
          fillRule="evenodd"
          stroke={color}
          d="M10.143 18.385L1 9.143 10.143 0"
        />
      </svg>
    </div>
  );
}
