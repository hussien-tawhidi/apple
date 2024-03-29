import React from "react";

export default function Pocket() {
  return (
    <div className="storeCard">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 42 56"
        className="as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated pocket"
        aria-hidden="true"
        role="img"
      >
        <g>
          <rect width="42" height="56" fill="none"></rect>
          <path d="M37,12H5a5.006,5.006,0,0,0-5,5V39a5.006,5.006,0,0,0,5,5H37a5.006,5.006,0,0,0,5-5V17A5.006,5.006,0,0,0,37,12ZM5,14H37a3,3,0,0,1,3,3v3H2V17A3,3,0,0,1,5,14ZM37,42H5a3,3,0,0,1-3-3V24H40V39A3,3,0,0,1,37,42ZM6,33.5v-4A1.5,1.5,0,0,1,7.5,28h6A1.5,1.5,0,0,1,15,29.5v4A1.5,1.5,0,0,1,13.5,35h-6A1.5,1.5,0,0,1,6,33.5Z"></path>
        </g>
      </svg>
      <div className="cardTexts">
        <p className="pocket">
          Pay in full or <span>pay over time.</span>your chioce
        </p>
      </div>
    </div>
  );
}
