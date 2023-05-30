import { useState, useEffect, useRef } from 'react';

import Image from 'next/image'
import s from './navbar.module.scss'

import { gsap } from "gsap";
import CtaButton from '../cta-button';

function CatPawButton() {
  const [showCatPaw, setShowCatPaw] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleClick = (event) => {
    setShowCatPaw(true);
    setClickPosition({ x: event.clientX, y: event.clientY });
  };

  const handleBodyClick = () => {
    setShowCatPaw(false);
  };

  return (
    <>
      <button onClick={handleClick}>Mostrar pata de gato</button>
      {showCatPaw && (

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        onClick={handleBodyClick}
      >
                <svg
          style={{
            position: 'absolute',
            top: clickPosition.y,
            left: clickPosition.x,
            zIndex: 9999
          }}
          width="100"
          height="100"
        >
          <path
            d="M 10 10 C 20 20, 40 20, 50 10"
            stroke="black"
            strokeWidth="5"
            fill="none"
          />
        </svg>
      </div>
      )}
    </>
  );
}


export default function Navbar() {
    let btnPath = useRef(null);
    
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    

    // const controlNavbar = () => {
    //   if (typeof window !== 'undefined') { 
    //     if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
    //       setShow(true); 
    //     } else { // if scroll up show the navbar
    //       setShow(true);  
    //     }
  
    //     // remember current page location to use in the next move
    //     setLastScrollY(window.scrollY); 
    //   }
    // };
  
    // useEffect(() => {
    //   if (typeof window !== 'undefined') {
    //     window.addEventListener('scroll', controlNavbar);
  
    //     // cleanup function
    //     return () => {
    //       window.removeEventListener('scroll', controlNavbar);
    //     };
    //   }

    // }, [lastScrollY]);
    return (
        <div className={`${s.navBar} ${s.bg_neutral_100} ${show && s.visible}`}>
            <div className={`${s.flex_spacer}`}>
              {/* <CatPawButton /> */}
            </div>
            <div className={`${s.title_area}`}>
                {/* <h1>KITTY SITTER</h1> */}
                <div className={`${s.logo}`}>
                  <Image src="/images/kittysitter_logo_nav.png" objectFit='contain' fill/>
                </div>
            </div>
            
            <div className={`${s.cta_area}`}>
                    <CtaButton type={'form'}/>
                    <CtaButton type={'kittyForm'}/>
                    {/* <button className={`${s.main_button}`}>Agendá tu visita</button> */}
                    {/* Abrir modal */}
                    {/* <button className={`${s.secondary_button}`}>Ser una Kitty</button> */}
                    {/* https://docs.google.com/forms/d/1ewLKJZfqE_XkUHjG7Uk45901o3fO94Dv_Ipx6G2uMxE/viewform?edit_requested=true */}

            </div>

        </div>
    );
}