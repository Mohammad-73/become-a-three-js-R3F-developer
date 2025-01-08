import { OrbitControls } from "@react-three/drei";
import { Physics, Debug } from "@react-three/rapier";
import Lights from "./Lights.jsx";
import Level from "./Level.jsx";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <Physics>
        <Debug />
        <Lights />
        <Level />
      </Physics>
    </>
  );
}