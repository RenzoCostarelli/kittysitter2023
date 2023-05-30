import styles from './title-reveal.module.scss'

import { useEffect, useRef } from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function RevealTitle(){
    gsap.registerPlugin(ScrollTrigger);
 
    let titleRef = useRef(null);

    useEffect(() => {
      let ctx = gsap.context(() => {   
        gsap.to(titleRef.children, {
          y: 0,
          stagger: 0.05,
          delay: 0,
          duration: .1,
        });

      })    
      return () => ctx.revert();
    }, [])

    return (
        <h1 className={`${styles.title} ${styles.text_accent_100}`} ref={el => {titleRef = el}} data-scroll data-scroll-speed="0">
          <div className={`${styles.char}`}>K</div>
          <div className={`${styles.char}`}>i</div>
          <div className={`${styles.char}`}>t</div>
          <div className={`${styles.char}`}>t</div>
          <div className={`${styles.char}`}>y</div>
          <div className={`${styles.char}`}>s</div>
          <div className={`${styles.char}`}>i</div>
          <div className={`${styles.char}`}>t</div>
          <div className={`${styles.char}`}>t</div>
          <div className={`${styles.char}`}>e</div>
          <div className={`${styles.char}`}>r</div>
        </h1>
    )
}