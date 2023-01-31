import { Suspense, useMemo } from "react";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import * as THREE from "three";
import { Float, useGLTF, Center, ScrollControls } from '@react-three/drei'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/dist/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)


export default function Model() {

  const room = useGLTF('./models/room.glb')
  console.log(room.scene)

  return (
    <>
        <primitive 
            object={ room.scene } 
            scale={ 0.016 } 
            position={[ 1.5, 0.5, 0]}
            rotation={[0.1, 0.6, 0.01]}
        />
    </>
  );
    // return null
}