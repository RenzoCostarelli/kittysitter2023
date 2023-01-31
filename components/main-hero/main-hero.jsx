import React, { useEffect, useLayoutEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from '../experience/experience'

import styles from './main-hero.module.scss'
import RevealTitle from '../title-reveal/title-reveal';

export default function MainHero() {
   


    return (
        <header className={styles.headerMain} data-scroll>
        <div className={`${styles.hero_container} ${styles.bg_primary_400}`} >
            <div className='main_container'>

                <div className={styles.hero_box}>
                  <RevealTitle />

                  <p className={`${styles.text_neutral_100}`} data-scroll data-scroll-speed="1">
                    Kittysitter es el primer servicio profesional de cuidado exclusivo de gatitos a 
                    domicilio en Rosario. Somos un equipo de personas altamente responsables, 
                    detallistas y comprometidas.
                  </p>

                  {/* <SvgButton /> */}

                  {/* <MainCtaButton 
                    text={'Reservar visita'}
                    href={'#'}
                  /> */}

         

              </div>
            </div>
        </div>
        <div className={styles.canvas_container}>
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
        </div>

        <div className={styles.cat_paw}>
          <div className={styles.paw_gum}></div>
          <div className={styles.paw_gum}></div>
          <div className={styles.paw_gum}></div>
          <div className={styles.paw_gum}></div>
          <div className={styles.cat_bigGum}></div>
        </div>

        
        <div className='custom_divider_top'>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>

      </header>
    )
}