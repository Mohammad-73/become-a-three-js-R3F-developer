import { Physics } from "@react-three/rapier";
import Level from "./Level.jsx";
import Player from "./Player.jsx";
import Lights from "./Lights.jsx";
import useGame from "./store/useGame.js";

export default function Experience() {
  const { blocksCount } = useGame((state) => state);

  return (
    <>
      {/* <OrbitControls makeDefault /> */}

      <Physics>
        {/* <Debug /> */}
        <Lights />
        <Level count={blocksCount} />
        <Player />
      </Physics>
    </>
  );
}
