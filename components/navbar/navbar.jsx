import { useState, useEffect, useRef } from 'react';

import Image from 'next/image'
import s from './navbar.module.scss'

import { gsap } from "gsap";

export default function Navbar() {
    let btnPath = useRef(null);
    
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    

    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(true); 
        } else { // if scroll up show the navbar
          setShow(true);  
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
  
        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }

    }, [lastScrollY]);
    return (
        <div className={`${s.navBar} ${s.bg_neutral_100} ${show && s.visible}`}>
            <div className={`${s.flex_spacer}`}></div>
            <div className={`${s.title_area}`}>
                {/* <h1>KITTY SITTER</h1> */}
                <div className={`${s.logo}`}>
                  <Image src="/images/kittysitter_logo_nav.png" objectFit='contain' fill/>
                </div>
            </div>
            
            <div className={`${s.cta_area}`}>
                    <button className={`${s.main_button}`}>Agendá tu visita</button>
                    {/* Abrir modal */}
                    <button className={`${s.secondary_button}`}>Ser una Kitty</button>
                    {/* https://docs.google.com/forms/d/1ewLKJZfqE_XkUHjG7Uk45901o3fO94Dv_Ipx6G2uMxE/viewform?edit_requested=true */}

            </div>

        </div>
    );
}