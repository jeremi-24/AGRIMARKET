"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  // Charger le modèle GLB
  const { scene } = useGLTF("./models/coffee_pack.glb");
  scene.rotation.x = Math.PI / 2;
  return <primitive object={scene} />;
};

const ModelViewer = () => {
  return (
    <div className="w-full  h-[800px]">
      <Canvas>
        {/* Contrôles pour naviguer dans le modèle */}
        <OrbitControls />
        {/* Lumières */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        {/* Charger le modèle */}
        <Model />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
