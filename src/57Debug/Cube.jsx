import React from "react";

const Cube = ({ scale, visible }) => {
  return (
    <mesh position-x={2} scale={scale} visible={visible}>
      <boxGeometry />
      <meshStandardMaterial color="mediumpurple" />
    </mesh>
  );
};

export default Cube;
