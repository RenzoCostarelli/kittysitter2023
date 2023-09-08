import { useState, useEffect, useRef } from 'react';

import Image from 'next/image'
import s from './navbar.module.scss'

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

    return (
        <div className={`${s.navBar} ${s.bg_neutral_100} ${show && s.visible}`}>
            <div className={`${s.flex_spacer}`}>
            </div>
            <div className={`${s.title_area}`}>
                <div className={`${s.logo}`}>
                  <Image src="/images/kittysitter_logo_nav.png" fill alt="kittysitter logo"/>
                </div>
            </div>
            
            <div className={`${s.cta_area}`}>
                    <CtaButton type={'form'}/>
                    <CtaButton type={'kittyForm'}/>
            </div>

        </div>
    );
}