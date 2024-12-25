import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import * as THREE from "three";

const FirstR3FApplication = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      flat
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        // outputEncoding: THREE.LinearEncoding,
        outputEncoding: THREE.sRGBEncoding,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      <Experience />
    </Canvas>
  );
};

export default FirstR3FApplication;
