import React from "react";
import useFetchMap from "../../../hooks/useFetchMap";

const lat = 37.28;
const lon = 127.024;

const Map = () => {
  const { container } = useFetchMap(lat, lon);

  return (
    <div
      ref={container}
      style={{ width: "1265px", height: "350px", border: "1px solid black" }}
    />
  );
};

export default Map;
