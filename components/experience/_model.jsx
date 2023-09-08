import { Suspense, useMemo } from "react";
import { useRef, useState, useEffect, useLayoutEffect, useCallback } from "react";
import * as THREE from "three";
import { Vector2, Color } from "three";
import { useGLTF, Environment, Loader, OrbitControls, Text } from '@react-three/drei'

import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { useControls } from 'leva'

import { useMousePosition } from "../../hooks/useMousePosition ";

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

const Gradient = () => {
  const mesh = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });

  const updateMousePosition = useCallback((e) => {
    mousePosition.current = { x: e.pageX, y: e.pageY };
  }, []);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_mouse: { value: new Vector2(0, 0) },
      u_bg: {
        value: new Color("#A1A3F7"),
      },
      u_colorA: { value: new Color("#9FBAF9") },
      u_colorB: { value: new Color("#FEB3D9") },
    }),
    []
  );

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition, false);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    };
  }, [updateMousePosition]);

  useFrame((state) => {
    const { clock } = state;

    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime() * 0.5;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={1.5}>
      <planeGeometry args={[50, 50, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
};

function Zoom() {
  useFrame((state, delta) => {
    state.camera.zoom += delta / 100
    state.camera.updateProjectionMatrix()
  })
}

export default function Model() {

  const catModelRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const y = Math.sin(time) * 0.002
    if (catModelRef.current) {
      catModelRef.current.rotation.y += y * 0.5;
    }
  });

  const scale = 2

  const modelRef = useRef()

  const room = useGLTF('./models/roomv2.glb')

  return (
    <>
      <Suspense fallback={null}>
          <primitive 
              ref={ modelRef }
              object={ room.scene } 
              scale={ 0.04 } 
              position={[ 2, -0.5, 0]}
              rotation={[0.1, 0.7, 0.02]}
              castShadow
              receiveShadow={true}
          />
          <Environment preset="city" castShadow/>


          <Environment {...envProps} files="./models/reading_room_1k2.hdr" /> 
          <group rotation={[0, 0, Math.PI / 4]}>

          </group>
        </Suspense>
    </>
  );
}