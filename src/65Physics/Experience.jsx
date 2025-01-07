import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  CuboidCollider,
  CylinderCollider,
  Debug,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function Experience() {
  const twisterRef = useRef();
  const cubeRef = useRef();

  const [hitSound] = useState(() => new Audio("./public/hit.mp3"));

  const hamburger = useGLTF("./public/hamburger.glb");

  const cubeJump = () => {
    const mass = cubeRef.current.mass();
    cubeRef.current.applyImpulse({ x: 0, y: 5 * mass, z: 0 });
    cubeRef.current.applyTorqueImpulse({
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
      z: Math.random() - 0.5,
    });
  };

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const eulerRotation = new THREE.Euler(0, time * 3, 0);
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(eulerRotation);
    twisterRef.current.setNextKinematicRotation(quaternionRotation);

    const angle = time * 0.5;
    const x = Math.cos(angle) * 2;
    const z = Math.sin(angle) * 2;
    twisterRef.current.setNextKinematicTranslation({ x: x, y: -0.8, z: z });
  });

  const collisionEnter = () => {
    hitSound.currentTime = 0;
    hitSound.volume = Math.random();
    hitSound.play();
  };

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Physics>
        <Debug />

        {/* Sphere */}
        <RigidBody colliders="ball">
          <mesh castShadow position={[-1.5, 2, 0]}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        {/* Cube */}
        <RigidBody
          ref={cubeRef}
          position={[1.5, 2, 0]}
          gravityScale={1}
          restitution={0.5}
          friction={0.7}
          colliders={false}
          onCollisionEnter={collisionEnter}
          //   onCollisionExit={() => console.log("exit")}
        >
          <mesh onClick={cubeJump} castShadow>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
          <CuboidCollider mass={2} args={[0.5, 0.5, 0.5]} />
        </RigidBody>

        {/* Plane */}
        <RigidBody type="fixed" friction={0.7}>
          <mesh receiveShadow position-y={-1.25}>
            <boxGeometry args={[10, 0.5, 10]} />
            <meshStandardMaterial color="greenyellow" />
          </mesh>
        </RigidBody>

        {/* Twister */}
        <RigidBody
          ref={twisterRef}
          position={[0, -0.8, 0]}
          friction={0}
          type="kinematicPosition"
        >
          <mesh castShadow scale={[0.4, 0.4, 3]}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>

        {/* Hamburger */}
        <RigidBody colliders={false} position={[0, 4, 0]}>
          <primitive object={hamburger.scene} scale={0.25} />
          <CylinderCollider args={[0.5, 1.25]} />
        </RigidBody>

        {/* Walls */}
        <RigidBody>
          <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, 5.25]} />
          <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, -5.25]} />
          <CuboidCollider args={[0.5, 2, 5]} position={[5.25, 1, 0]} />
          <CuboidCollider args={[0.5, 2, 5]} position={[-5.25, 1, 0]} />
        </RigidBody>
      </Physics>
    </>
  );
}
