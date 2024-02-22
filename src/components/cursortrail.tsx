import React, { useState, useEffect } from "react";

export default function CursorTrail() {
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]); // Adjusted type for trail state

  useEffect(() => {
    const onMouseMove = (event: any) => {
      const { clientX, clientY } = event;
      setTrail((prevTrail) => [...prevTrail, { x: clientX, y: clientY }]);
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <>
      {trail.map((position, index) => (
        <div
          key={index}
          className="trail"
          style={{ left: position.x, top: position.y }}
        />
      ))}
    </>
  );
}
