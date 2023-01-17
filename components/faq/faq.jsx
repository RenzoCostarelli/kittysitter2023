import styles from './faq.module.scss'

import Image from 'next/image'



export default function Faq(props) {


    return (
      <>
        <div className={styles.wrapper}>
        <div className={`${styles.container} ${styles.flex_center}`}>
            <div className={`${styles.image_container} ${styles.flex_basis_0 }`}>
              <Image  src="/images/Kitty-1.png" 
                      fill 
                      sizes="999px" 
                      alt="Kittysitter Rosario"
              />
            </div>
              <div className={`${styles.info_container} ${styles.flex_basis_0 } ${styles.right}`}>
                <h1 className={``}>¿Cómo funciona?</h1>
                <p>
                  Hacemos visitas diarias de una hora. 
                  En cada visita nos ocupamos de darles de comer, 
                  cambiar el agua, limpiar las bandejas sanitarias, 
                  hacerles compañía, jugar y mimarlos. 
                  Siempre teniendo en cuenta el temperamento y respetando sus tiempos. 
                  Cuando estamos en tu casa te enviamos la ubicación en tiempo real, fotos y videos.
                </p>
                <div className={`${styles.pattern_decoration_dots_small} ${styles.deco_circle}`}></div>
              </div>
          </div>

          <div className={`${styles.container}  ${styles.flex_center}`}>
            <div className={`${styles.info_container} ${styles.flex_basis_0 }`}>
            <h1>¿Por qué a domicilio?</h1>
              <p>
              Los gatitos son animales territoriales. 
              Con Kittysitter podes viajar con la tranquilidad de dejarlos en buenas manos y 
              en su propio territorio, con sus olores, 
              sus rutinas y sin someterlos al estrés que es para la gran mayoría el ser trasladados o 
              llevados a un entorno nuevo. Antes de tu partida hacemos una entrevista previa para 
              conocerlos y que nos muestres todo lo que consideres importante.
              </p>
              <div className={`${styles.pattern_decoration_dots} ${styles.deco_box}`}></div>
            </div>
            <div className={`${styles.image_container} ${styles.flex_basis_0 }`}>
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