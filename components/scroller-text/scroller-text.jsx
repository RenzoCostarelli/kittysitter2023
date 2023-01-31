

import React, { useEffect, useLayoutEffect, useRef } from 'react'

import { gsap } from "gsap";
import style from './scroller-text.module.scss'

const TextScroller = React.forwardRef((props, ref) => {
    
    // console.log(ref, props)

    const trigger = ref;

    let bigTextRef = useRef(null);

    useEffect(() => {
                  // scroll texto
                  gsap.to(bigTextRef, {
                    xPercent: -150,
                    ease: "none", // <-- IMPORTANT!
                    scrollTrigger: {
                      trigger: bigTextRef,
                      start: "-=500",
                      end: "+=4000",
                      pin: false,
                      scrub: 0.5
                    }
                  });
    }, [])

    return (
        <div className={`${style.wrapper_overflow_hidden} ${style.line} `} >
        <div className={`${style.big_text}`} ref={el => {bigTextRef = el}}  data-scroll data-scroll-direction='horizontal' data-scroll-speed="-3">
          <span className={`${style.fw_thin}`}>purr</span><span className={`${style.fancy_text} ${style.fs_italic}`}>miau</span><span className={`${style.fw_thin}`}>purrr</span><span className={`${style.fancy_text}`}>meow</span>
          <span className={`${style.fs_italic}`}>meow</span><span className={`${style.fancy_text}`}>miau</span><span className={`${style.fs_italic}`}>purrr</span><span className={`${style.fancy_text}`}>meow</span>
        </div>
      </div>
    );
    
})

TextScroller.displayName = ''

export default TextScroller;