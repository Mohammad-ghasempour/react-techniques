import React, { useState, useRef } from "react";
import "./accordion.css";
import Chevron from "./Chevron";

const Accordion = (props) => {
  const [active, setActive] = useState("");
  const [contentHeight, setcontentHeight] = useState("0");
  const [rotate, setRotate] = useState("");

  const content = useRef(null);

  function toggleAccordion() {
    setActive(active === "" ? "Accordion-active" : "");
    setcontentHeight(active === "" ? `${content.current.scrollHeight}` : "0");
    setRotate(active === "" ? `Rotate` : "");
  }

  return (
    <>
      <div>
        <button
          style={{ display: "flex" }}
          className={`Accordion-button ${active}`}
          onClick={toggleAccordion}
        >
          <p style={{ justifyContent: "center" }}>{props.title}</p>
          <span className={`Accordion-icon ${rotate}`}>
            {" "}
            <Chevron />{" "}
          </span>
        </button>

        <div
          ref={content}
          style={{ maxHeight: `${contentHeight}px` }}
          className="Accordion-content"
        >
          {props.content}
        </div>
      </div>
    </>
  );
};

export default Accordion;
