import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import * as THREE from "three";

const EnvironmentAndStaging = () => {
  //   const created = ({ scene }) => {
  //     // gl.setClearColor("#ff0000", 1);
  //     scene.background = new THREE.Color("#ff11ff");
  //   };

  return (
    <Canvas
      //   shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      //   onCreated={created}
    >
      <Experience />
    </Canvas>
  );
};

export default EnvironmentAndStaging;
