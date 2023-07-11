import React, { useEffect, useLayoutEffect, useRef, Suspense, useState } from 'react'
import Image from 'next/image'
import { gsap } from "gsap";
import styles from './main-hero.module.scss'
import RevealTitle from '../title-reveal/title-reveal';
import CtaButton from '../cta-button';

export default function MainHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const imageContainerRef = useRef(null);

  let descRef = useRef()
  const setLoad = () => {
      
    setIsLoaded(true)
    console.log(isLoaded)
  }

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
  
    gsap.set(imageContainer, {
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      yPercent: '50',
    });
  
    gsap.to(imageContainer, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      yPercent: '0',
      duration: 1,
      delay: 1,
      ease: 'power2.out',
    });
  }, []);

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
            <div className={`main_container ${styles.inner_content}`}>
                <div className={styles.hero_box} data-scroll data-scroll-speed="1">
                  <RevealTitle />
                  <p className={`${styles.text_neutral_100} ${styles.description}`} ref={ descRef }>
                    Kittysitter es el primer servicio profesional de cuidado exclusivo de gatitos a 
                    domicilio en Rosario. Somos un equipo de personas altamente responsables, 
                    detallistas y comprometidas.
                  </p>
                  <div className={`${styles.cta_area}`}>
                    <CtaButton type={'form'}/>
                    <CtaButton type={'kittyForm'}/>
                  </div>
                </div>
                <div className={styles.image_area} ref={imageContainerRef}>
                    <div className={styles.image_container} >
                        <Image  src="/images/Room-Kitty.png" 
                              fill 
                              sizes="999px" 
                              alt="Kittysitter Rosario"
                      />
                    </div>
                </div>
            </div>
        </div>
        
        <div className='custom_divider_top'>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>

      </header>
    )
}