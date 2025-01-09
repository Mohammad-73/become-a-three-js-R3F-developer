import { Physics } from "@react-three/rapier";
import Level from "./Level.jsx";
import Lights from "./Lights.jsx";
import Player from "./Player.jsx";
import useGame from "./stores/useGame.js";

export default function Experience() {
  const { blocksCount, blockSeed } = useGame((state) => state);

  return (
    <>
      {/* <OrbitControls makeDefault /> */}

      <color args={["#bdedfc"]} attach="background" />

      <Physics>
        {/* <Debug /> */}
        <Lights />
        <Level count={blocksCount} seed={blockSeed} />
        <Player />
      </Physics>
    </>
  );
}
