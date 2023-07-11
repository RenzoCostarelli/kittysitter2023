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
    // This reference will give us direct access to the mesh
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
    // mesh.current.material.uniforms.u_mouse.value = new Vector2(
    //   mousePosition.current.x,
    //   mousePosition.current.y
    // );
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

  // const mousePosition =  useMousePosition();  
  const catModelRef = useRef();

  useFrame((state) => {
    // Rotate the model in the y-axis
    const time = state.clock.getElapsedTime()
    const y = Math.sin(time) * 0.002
    if (catModelRef.current) {
      catModelRef.current.rotation.y += y * 0.5;
    }
  });

  const scale = 2

  const modelRef = useRef()

  const room = useGLTF('./models/roomv2.glb')
  // const { nodes } = useGLTF('./models/cat.glb')
  // console.log('nodes', room)
  // console.log(room.scene)
  // return
  // const envProps = useControls({ background: false })
  // const materialProps = useControls({
  //   thickness: { value: 5, min: 0, max: 20 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
  //   clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0.9, max: 1, step: 0.01 },
  //   ior: { value: 1.25, min: 1, max: 2.3, step: 0.05 },
  //   envMapIntensity: { value: 1, min: 0, max: 100, step: 1 },
  //   color: '#ffffff',
  //   attenuationTint: '#4710d8',
  //   attenuationDistance: { value: 0.14, min: 0, max: 1 },
  // })
  
  // useEffect(() => {

  //   let ctx = gsap.context(() => {
  //     gsap.to(
  //       modelRef.current.scale,
  //       {
  //         x: 1, 
  //         y: 1, 
  //         z: 1,
  //         ease: 'sine.inOut',
  //         duration: 3,
  //         delay: 0.5,
  //         paused: false,
  //       }
  //     )
  //     gsap.to(
  //       modelRef.current.rotation,
  //       {
  //         x: 0, 
  //         y: 0.7, 
  //         z: 0.01,
  //         ease: 'sine.inOut',
  //         duration: 2,
  //         paused: false,
  //       }, "<"
  //     )
  //     gsap.to(
  //       modelRef.current.position,
  //       {
  //         x: 1.5, 
  //         y: -0.3, 
  //         z: 0,
  //         ease: 'sine.inOut',
  //         duration: 1.5,
  //         paused: false,
  //       }, "-=2.5"
  //     )

  //   })

  //   return () => ctx.revert();
  // }, [])



  return (
    <>
        {/* <color attach="background" args={['lightpink']} /> */}
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
          {/* <Zoom /> */}
           {/* <Gradient /> */}
          {/* <mesh geometry={nodes.Object_12.geometry} 
                scale={ 0.3 } 
                rotation={[0.1, 10.6, 0.05]} 
                position={[ 2.5, -3.5, 0]}
                ref={ catModelRef }>
            <meshPhysicalMaterial {...materialProps} />
          </mesh>

          <Environment {...envProps} files="./models/reading_room_1k2.hdr" /> */}
          <group rotation={[0, 0, Math.PI / 4]}>
            {/* <mesh position={[0, 0, -10]} material-color="lightpink" receiveShadow>
              <planeGeometry args={[2000, 2000]}/>
            </mesh> */}
            {/* <mesh position={[0, 0, -10]} material-color="hotpink">
              <planeGeometry args={[2, 20]} />
            </mesh> */}
          </group>
        </Suspense>
        {/* <OrbitControls /> */}
    </>
  );
    // return null
}