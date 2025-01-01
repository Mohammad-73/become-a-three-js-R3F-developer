import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";

const ThreeDText = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [4, -2, 6],
      }}
    >
      <Experience />
    </Canvas>
  );
};

export default ThreeDText;
