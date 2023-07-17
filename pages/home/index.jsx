import React, { useEffect, useRef, useState } from 'react'
import useStore from '../../lib/store';
import Head from 'next/head';
import Image from 'next/image'
import Faq from '../../components/faq/faq';

import Layout from '../../components/layout';
import MainHero from '../../components/main-hero/main-hero';
import TextScroller from '../../components/scroller-text/scroller-text';

import styles from './home.module.scss'
import GalleryScroller from '../../components/scroller-gallery/scroller-gallery';
import Reviews from '../../components/reviews-card/reviews-card';
import SocialNetworkLinks from '../../components/social-network-links/social-network-links';
import Medios from '../../components/news-logos-list/news-logos-list';

import ModalContainer from '../../components/modal/modal';
import CtaButton from '../../components/cta-button';

export default function Home() {

  const showModal = useStore(({ showForm }) => showForm)

  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
        scroll = new locomotiveModule.default({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            smoothMobile: false,
            resetNativeScroll: true
        });
    });

    // `useEffect`'s cleanup phase
    return () => {
        if (scroll) scroll.destroy();
    }
});
  
  let scrollerTrigger = useRef();
  useEffect(() => {
    // console.log(scrollerTrigger)
  },[])

    return (
      <div data-scroll-section className='scroll-section'>
        <Layout>
          <Head>
            <title>KITTYSITTER Rosario</title>
            <meta name="description" content="Kittysitter es el primer servicio profesional de cuidado exclusivo de gatitos a domicilio en Rosario. Somos un equipo de personas altamente responsables, detallistas y comprometidas." />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <MainHero />
          
          <main className={styles.main}>

              <section className={`${styles.section_faq} `} ref={scrollerTrigger}>
                <div className={`bg-white`}>
                    <Faq />
                </div>
              </section>

              <section className={`${styles.pb_4} ${styles.pos_relative} bg-white`} >
                <TextScroller ref={scrollerTrigger.current}/>
                <GalleryScroller/>
                <div className={`top_divider`}>
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                  </svg>
                </div>
              </section>

              <section className={`${styles.section_reviews} 
                              ${styles.vh_100} 
                              ${styles.pb_6} 
                              ${styles.flex_align_center}`}>
                <div className={`${styles.main_container} ${styles.z_index_0} ${styles.w100}`} data-scroll data-scroll-speed="1"> 
                  {/* deco */}
                  <div className={`${styles.pattern_reviews_section_container} ${styles.pattern_decoration_white_dots}`}></div> 
                  <div className={`${styles.pattern_container_bottom_right} ${styles.pattern_decoration_white_dots}`}></div> 
                  {/* deco */}     <h1 className={`section_title ${styles.text_center} ${styles.text_accent_100}  ${styles.drop_shadow_100}`}>Reseñas</h1>
                    <div className={styles.slider_container}>
                      <Reviews/>
                    </div>
                    <div className={`${styles.button_container} ${styles.text_center}`}>
                      <CtaButton type={'reviews'}/>
                    </div>
                </div>
              </section>

              <section className={`section_basic `}>
                <div className={`custom_divider_waves_opacity`}>
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                  </svg>
                </div>
                <div className={`${styles.main_container} ${styles.pb_4}`}> 
                  
                  <h1 className={`section_title_small ${styles.text_center} ${styles.text_neutral_900}  ${styles.drop_shadow_100}`}>Nos viste en:</h1>

                  <Medios />
                </div>
              </section>

          </main>

          <footer className={`${styles.footer} bg-white`}>
            <div className={`wrapper flex_column`}>
              <div className={`${styles.logo_footer}`}>
                  <Image src="/images/kittysitter_logo_nav.png" fill  alt='kittysitter footer logo'/>
              </div>
              <div className={`${styles.social_links} ${styles.gap_1}`}>
                <SocialNetworkLinks/>

              </div>

                <div className="footer_bottom_section">

                </div>
            </div>
            </footer>
            
            { showModal && 
              <ModalContainer />          
            }
        </Layout>
     </div>
    )
}