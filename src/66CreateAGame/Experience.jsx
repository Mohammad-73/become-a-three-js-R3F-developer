import { Physics } from "@react-three/rapier";
import Level from "./Level.jsx";
import Player from "./Player.jsx";
import Lights from "./Lights.jsx";

export default function Experience() {
  return (
    <>
      {/* <OrbitControls makeDefault /> */}

      <Physics>
        {/* <Debug /> */}
        <Lights />
        <Level />
        <Player />
      </Physics>
    </>
  );
}
