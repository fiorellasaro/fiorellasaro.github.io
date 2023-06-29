import React, { useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ThreeScene from "../components/ThreeScene";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Color } from "three";

const Home: NextPage = () => {
  const sceneRef = useRef<THREE.Scene>(null);
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <ThreeScene>
        <Stars
          ref={sceneRef}
          radius={30}
          depth={50}
          count={15000}
          factor={4}
          saturation={0}
          fade
        />
      </ThreeScene>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          zIndex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <h1
            className="animated-content"
            style={{ color: "white", fontWeight: "bolder", fontSize: "35px" }}
          >
            Fiorella Sánchez
          </h1>
          <h2
            style={{ color: "white", fontWeight: "bolder", fontSize: "25px" }}
          >
            Frontend Developer | 3D Developer
          </h2>
        </div>
        <div style={{ marginTop: "150px" }}>
          <h2
            className="animated-content"
            style={{ color: "white", fontWeight: "bolder", fontSize: "30px" }}
          >
            Projects
          </h2>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
            <a
              href="https://zentangle.io/"
              target="_blank"
              style={{ textDecoration: "underline", fontSize: "25px" }}
            >
              Zentangle
            </a>
            <a
              href="https://bloinx.io/"
              target="_blank"
              style={{ textDecoration: "underline", fontSize: "25px" }}
            >
              Bloinx
            </a>
            <a
              href="https://mujeresmusicas.aguaflorida.pe/"
              target="_blank"
              style={{ textDecoration: "underline", fontSize: "25px" }}
            >
              Mujeres Músicas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
