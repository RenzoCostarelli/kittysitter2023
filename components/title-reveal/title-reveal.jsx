import styles from './title-reveal.module.scss'

import { useEffect, useRef } from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function RevealTitle(){
    gsap.registerPlugin(ScrollTrigger);
 
    let titleRef = useRef(null);

    useEffect(() => {
          
        gsap.to(titleRef.children, {
          y: 0,
          stagger: 0.05,
          delay: 0.2,
          duration: .1,
          onComplete(){
            // console.log('iuju');
          }
        }, titleRef);

        

    }, [])

    return (
        <h1 className={`${styles.title} ${styles.text_accent_100}`} ref={el => {titleRef = el}}>
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