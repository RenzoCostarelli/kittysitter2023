import { useEffect, useRef } from 'react'
import styles from './faq.module.scss'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Faq(props) {

  const title1 = useRef()
  const title2 = useRef()
  const parentRef = useRef()

  // useEffect(() => {

  //   let ctx = gsap.context(() => {

  //     gsap.from(title1.current, {
  //       opacity: 0,
  //       xPercent: 50,
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: parentRef.current,
  //         scroller: '.scroll-section',
  //         start: 'center center',
  //         end: 'bottom bottom',
  //         scrub: true,
  //         markers: true,
  //       },

  //     })
  //     gsap.from(title2.current, {
  //       opacity: 0,
  //       xPercent: -50,
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: title2.current,
  //         start: 'top center',
  //         end: 'center center',
  //         scrub: true,
  //         markers: true,
  //       },

  //     })
  
  //     ScrollTrigger.refresh()
  //   })
  //   return () => ctx.revert()

  // }, [])
  




    return (
      <>
        <div className={styles.wrapper} ref={parentRef}>
            <div className={`${styles.faq_container} ${styles.flex_center}`}>
                <div className={`${styles.image_container}`} data-scroll data-scroll-speed="1">
                  <Image  src="/images/Kitty-1.png" 
                          fill 
                          sizes="999px" 
                          alt="Kittysitter Rosario"
                  />
                </div>
                  <div className={`${styles.info_container} ${styles.flex_basis_0 } ${styles.right}`} data-scroll data-scroll-speed="3">
                    <h1 className={``} ref={ title1 }>¿Cómo funciona?</h1>
                    <p>
                      Hacemos visitas diarias de una hora. 
                      En cada visita nos ocupamos de darles de comer, 
                      cambiar el agua, limpiar las bandejas sanitarias, 
                      hacerles compañía, jugar y mimarlos. 
                      Siempre teniendo en cuenta el temperamento y respetando sus tiempos. 
                      Cuando estamos en tu casa te enviamos la ubicación en tiempo real, fotos y videos.
                    </p>
                    <div className={`${styles.pattern_decoration_dots_small} ${styles.deco_circle}`} data-scroll data-scroll-speed="0.5"></div>
                  </div>
              </div>

              <div className={`${styles.faq_container}  ${styles.flex_center}`}>
                <div className={`${styles.info_container} ${styles.flex_basis_0 }`} data-scroll data-scroll-speed="3">
                <h1 ref={ title2 }>¿Por qué a domicilio?</h1>
                  <p>
                  Los gatitos son animales territoriales. 
                  Con Kittysitter podes viajar con la tranquilidad de dejarlos en buenas manos y 
                  en su propio territorio, con sus olores, 
                  sus rutinas y sin someterlos al estrés que es para la gran mayoría el ser trasladados o 
                  llevados a un entorno nuevo. Antes de tu partida hacemos una entrevista previa para 
                  conocerlos y que nos muestres todo lo que consideres importante.
                  </p>
                  <div className={`${styles.pattern_decoration_dots} ${styles.deco_box}`} data-scroll data-scroll-speed="0.5"></div>
                </div>
                <div className={`${styles.image_container}`} data-scroll data-scroll-speed="1">
                  <Image  src="/images/Kitty-2.png" 
                          fill 
                          sizes="999px" 
                          alt="Kittysitter Rosario"
                  />
                </div>
              </div>
        </div>
      </>
    )
}