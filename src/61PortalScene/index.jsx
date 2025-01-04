import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const PortalScene = () => {
  return (
    <Canvas
      flat
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [1, 2, 6],
      }}
    >
      <Experience />
    </Canvas>
  );
};

export default PortalScene;
