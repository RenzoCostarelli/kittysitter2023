import Image from 'next/image'
// import RankingStars from '../ranking-stars/ranking-stars'
import reviewStyles from './reviews-card.module.scss'


export default function Reviews() {


    // dummy data

    const reviewsList = [
        {
            id: 1,
            img: '/images/reviews/antonella.png',
            name: 'Antonella',
            review: 'Un servicio increíble, lo super recomiendo. Todas las chicas son muy amorosas y respetuosas, tanto con los michis como con los hogares. Cada viaje que hago me voy super tranquila y en cada foto y video que envían se nota el amor, la paciencia y la dedicación que les brindan y lo relajados que están. Una vez más, gracias por todo!',
            stars: 5,
        },
        {
            id: 2,
            img: '/images/reviews/pauli.png',
            name: 'Pauli',
            review: 'Contrato a KittySitter desde ya hace 2 años y estoy más que conforme, las volvería a elegir una y mil veces. Súper confiables, a mi bebé siempre lo encuentro muy tranquilo cuando regreso de viaje, a diferencia de cuando lo he dejado con otras personas. Las kittys son muy amorosas y juegan con el, anímense y prueben el servicio...',
            stars: 5,
        },
        {
            id: 3,
            img: '/images/reviews/erika.png',
            name: 'Erika',
            review: 'Excelente servicio, hace 3 años que las elijo para cuidar a mi gatito y siempre quedo re contenta! Durante los días que quedan a cargo respetan los tiempos y el humor de los michis y estan muy atentas a sus necesidades y los cuidan perfecto, al llegar al domicilio envían ubicación, fotitos y los videos que hacen que te quedes ...',
            stars: 5,
        },
    ]


    return(
        <div className={`${reviewStyles.cards_container}`}>
            {reviewsList.map(({ id, img, name, review, stars }) => (
                <div className={`${reviewStyles.card}`} key={id}>
                    <div className={`${reviewStyles.card_header} ${reviewStyles.text_center}`} >
                        <Image className={`${reviewStyles.profile_pic}`} src={img} width={120} height={120} alt="Kitty sitter reviews" />
                        <h3 className={`${reviewStyles.title}`}>{name}</h3>
                    </div>
                    <div className={`${reviewStyles.card_body}`}>
                        {/* <RankingStars stars={stars}/> */}
 
                        <p>{review}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}