import React from "react";
import { footerPatagraph } from "../../data/FakeData";

export default function Paragraph() {
  return (
    <div className="para container">
      {footerPatagraph.map((para) => (
        <p key={para.id}>{para.pare}</p>
      ))}
    </div>
  );
}
