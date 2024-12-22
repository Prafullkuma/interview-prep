import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";

const FollowMouse = () => {
  const [mouseMovement, setMouseMovement] = useState({
    xClient: "",
    yClient: "",
  });

  const bodyRef = useRef(null);

  const mouseMove = (event) => {
    const xClient = event.clientX;
    const yClient = event.clientY;

    const firstElement = bodyRef.current.firstElementChild;

    firstElement.style.cssText = `
        position: relative;
        top: ${yClient + 20}px;
        left: ${xClient - 20}px;
      `;
    setMouseMovement({
      xClient: xClient,
      yClient: yClient,
    });
  };

  useEffect(() => {
    bodyRef.current.addEventListener("mousemove", mouseMove);
    return () => bodyRef.current.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div ref={bodyRef} className="container">
      <div className="pointer"></div>
      <p>
        {mouseMovement.xClient}- {mouseMovement.yClient}
      </p>
    </div>
  );
};

export default FollowMouse;
