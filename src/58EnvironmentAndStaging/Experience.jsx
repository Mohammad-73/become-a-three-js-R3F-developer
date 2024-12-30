import { useFrame } from "@react-three/fiber";
import {
  AccumulativeShadows,
  BakeShadows,
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  Sky,
  softShadows,
  useHelper,
} from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useControls } from "leva";

// softShadows({
//   frustum: 3.75,
//   size: 50,
//   near: 9.5,
//   samples: 17,
//   rings: 11,
// });

export default function Experience() {
  const cube = useRef();
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 2);

  useFrame((state, delta) => {
    // const time = state.clock.elapsedTime;
    // cube.current.position.x = 2 + Math.sin(time);
    cube.current.rotation.y += delta * 0.2;
  });

  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#000000",
    opacity: { value: 0.5, min: 0, max: 5 },
    blur: { value: 1, min: 0, max: 10 },
  });

  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] },
  });

  const { envMapIntensity } = useControls("environment map", {
    envMapIntensity: { value: 3.5, min: 0, max: 12 },
  });

  return (
    <>
      <Environment
        background
        // files={[
        //   "../../public/environmentMaps/2/px.jpg",
        //   "../../public/environmentMaps/2/nx.jpg",
        //   "../../public/environmentMaps/2/py.jpg",
        //   "../../public/environmentMaps/2/ny.jpg",
        //   "../../public/environmentMaps/2/pz.jpg",
        //   "../../public/environmentMaps/2/nz.jpg",
        // ]}
        files={"../../public/environmentMaps/the_sky_is_on_fire_2k.hdr"}
        // preset="sunset"
        // resolution={32}
      >
        {/* <color args={["#000000"]} attach="background" />
        <Lightformer
          position-z={-5}
          scale={10}
          color="red"
          intensity={10}
          form="ring"
        /> */}
        {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[100, 0, 0]} />
        </mesh> */}
      </Environment>

      {/* <BakeShadows /> */}

      <color args={["ivory"]} attach={"background"} />

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <AccumulativeShadows
        position={[0 - 0.99, 0]}
        scale={10}
        color="#316d39"
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          bias={0.001}
        />
      </AccumulativeShadows> */}

      <ContactShadows
        position={[0, -0.99, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
      />

      {/* <directionalLight
        ref={directionalLightRef}
        position={sunPosition}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-left={-5}
        shadow-camera-bottom={-5}
      /> */}
      {/* <ambientLight intensity={0.5} /> */}

      {/* <Sky sunPosition={sunPosition} /> */}

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial
          color="orange"
          envMapIntensity={envMapIntensity}
        />
      </mesh>

      <mesh castShadow ref={cube} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial
          color="mediumpurple"
          envMapIntensity={envMapIntensity}
        />
      </mesh>

      <mesh
        // receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial
          color="greenyellow"
          envMapIntensity={envMapIntensity}
        />
      </mesh>
    </>
  );
}
