import React, { Suspense, useRef, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";

type ThreeSceneProps = {
  children: React.ReactNode;
};

const ThreeScene: React.FC<ThreeSceneProps> = ({ children }) => {
  const sceneRef = useRef<THREE.Scene>(null);

  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      camera={{ position: [0, 0, 5] }}
      gl={{ alpha: false }}
      onCreated={({ gl }) => {
        gl.setClearColor("black");
      }}
    >
      {children}
    </Canvas>
  );
};

export default ThreeScene;
