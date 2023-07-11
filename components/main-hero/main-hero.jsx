import React, { useEffect, useLayoutEffect, useRef, Suspense, useState } from 'react'
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber'
import { gsap } from "gsap";
import Experience from '../experience/experience'
import styles from './main-hero.module.scss'
import RevealTitle from '../title-reveal/title-reveal';
import CtaButton from '../cta-button';

export default function MainHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  let descRef = useRef()
  const setLoad = () => {
      
    setIsLoaded(true)
    console.log(isLoaded)
  }

  useEffect(() => {
    let ctx = gsap.context(() => {   
      gsap.set(descRef.current, {y: 20, opacity: 0 })

      gsap.to(descRef.current, {
        y: 0,
        opacity: 1,
        delay: 0,
        duration: 0.5,
        onComplete: (() => { setLoad() })
      });

    })    
    return () => ctx.revert();

  }, [])

      return (
        <header className={styles.headerMain} data-scroll>
        <div className={`${styles.hero_container} ${styles.bg_primary_400}`} >
            <div className='main_container'>
                <div className={styles.hero_box} data-scroll data-scroll-speed="1">
                  <RevealTitle />
                  <p className={`${styles.text_neutral_100} ${styles.description}`} ref={ descRef }>
                    Kittysitter es el primer servicio profesional de cuidado exclusivo de gatitos a 
                    domicilio en Rosario. Somos un equipo de personas altamente responsables, 
                    detallistas y comprometidas.
                  </p>
                  <CtaButton type={'form'}/>
              </div>
            </div>
        </div>
        {/* <div className={styles.canvas_container}>
              <Canvas
                  flat
                  camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [1, 2, 6],
                  }}
                > 
                <Experience />
              </Canvas>
        </div> */}

        {/* <div className={styles.cat_paw}>
          <div className={styles.paw_gum}></div>
          <div className={styles.paw_gum}></div>
          <div className={styles.paw_gum}></div>
          <div className={styles.paw_gum}></div>
          <div className={styles.cat_bigGum}></div>
        </div> */}

        
        <div className='custom_divider_top'>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>

      </header>
    )
}