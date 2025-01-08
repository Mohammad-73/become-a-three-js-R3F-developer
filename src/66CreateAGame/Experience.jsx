import { Physics } from "@react-three/rapier";
import Level from "./Level.jsx";
import Player from "./Player.jsx";
import Lights from "./Lights.jsx";
import useGame from "./store/useGame.js";

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
