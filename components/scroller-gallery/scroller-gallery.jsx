import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import s from './scroller-gallery.module.scss'
gsap.registerPlugin(ScrollTrigger);

export default function GalleryScroller() {
    let hGalleryRef = useRef(null);
    let scrollerRef = useRef(null);

    const galleryData = [
        {
          src: `/images/gallery/1.jpg`,
        },
        {
          src: `/images/gallery/2.jpg`,
        },
        {
          src: `/images/gallery/3.jpg`,
        },
        {
          src: `/images/gallery/4.jpg`,
        },
        {
          src: `/images/gallery/5.jpg`,
        },
        {
          src: `/images/gallery/6.jpg`,
        },
        {
          src: `/images/gallery/7.jpg`,
        },
        {
          src: `/images/gallery/8.jpg`,
        },
        {
          src: `/images/gallery/9.jpg`,
        },
        {
          src: `/images/gallery/10.jpg`,
        },
        {
          src: `/images/gallery/12.jpg`,
        }
    ];
    
  
    useEffect(() => {
       gsap.to(scrollerRef.current, {
        xPercent: 100,
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
          trigger: hGalleryRef.current,
          start: "-=1000",
          end: "+=4000",
          pin: false,
          scrub: 0.5
        }
      });
    }, [])

    return (
        <div className={`${s.wrapper_overflow_hidden}`} ref={hGalleryRef}>
            <div className={`${s.scroll_gallery}`} ref={scrollerRef}>
                {galleryData.map(({ src }) => (
                <div className={s.gallery_item} key={src}>
                  <Image src={src} width={1000} height={1000} alt='kittysitter.com.ar'/>
                </div>
                ))}

            </div>
        </div>
    );
}