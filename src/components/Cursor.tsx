import React, {useState, useEffect} from "react";
import {WindowLocation} from "@reach/router";
import useMousePosition from "../hooks/useMousePosition";

export const Cursor: React.FC<{location: WindowLocation}> = ({location}) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [x, y] = useMousePosition();

  useEffect(() => {
    addEventListeners();
    hoverEventListeners();
    return () => removeEventListeners();
  }, [location.key]); // Passed location.key as dependency to keep on registering handlers on page change

  const addEventListeners = () => {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const hoverEventListeners = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });
    document.querySelectorAll("button").forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const innerCursorStyle: React.CSSProperties = {
    mixBlendMode: "difference",
    transition: " opacity 0.3s, transform 0.3s ease",
    zIndex: 100,
    left: `${x}px`,
    top: `${y}px`,
  };

  if (hovered) {
    Object.assign(innerCursorStyle, {
      transform: "translate(-50%, -50%) scale(4)",
    });
  }

  if (clicked) {
    Object.assign(innerCursorStyle, {
      transform: "translate(-50%, -50%) scale(0.75)",
    });
  }

  const outerCursorStyle: React.CSSProperties = {
    mixBlendMode: "difference",
    transition: "0.02s ease-out, opacity 0.3s, transform 0.3s ease",
    zIndex: 100,
    left: `${x}px`,
    top: `${y}px`,
  };

  if (hovered) {
    Object.assign(outerCursorStyle, {
      transform: "translate(-50%, -50%) scale(1.5)",
    });
  }

  if (clicked) {
    Object.assign(outerCursorStyle, {
      transform: "translate(-50%, -50%) scale(-0.75)",
    });
  }

  return (
    <>
      <div
        className='pointer-events-none fixed transform -translate-x-1/2 -translate-y-1/2 p-1 hidden sm:block bg-white rounded-full'
        style={innerCursorStyle}
      ></div>
      <div
        className='pointer-events-none fixed transform -translate-x-1/2 -translate-y-1/2 p-3 hidden sm:block border border-white rounded-full'
        style={outerCursorStyle}
      ></div>
    </>
  );
};

export default Cursor;
