import Image from "next/image";

import Styles from './news-logos-list.module.scss'

export default function Medios() {
    return(
        <div className={`${ Styles.logos_list} ${Styles.d_flex} ${Styles.gap_2} ${Styles.pb_2} ${Styles.pbot_0} ${Styles.flex_align_center} ${Styles.flex_justify_center} ${Styles.text_center}`}>
            
                <a href="#" className={ Styles.news_link}>
					<Image src="/images/logos/capital.webp" fill sizes="384px" alt="La Capital logo"/>
				</a>
                <a href="#" className={ Styles.news_link}>
					<Image src="/images/logos/cnoticias.webp" fill sizes="384px" alt="cnoticias logo"/>
				</a>
                <a href="#" className={ Styles.news_link}>
					<Image src="/images/logos/logo-on24.webp" fill sizes="212px" alt="on24 logo"/>
				</a>
                <a href="#" className={ Styles.news_link}>
					<Image src="/images/logos/puntobiz.webp" fill sizes="185px" alt="puntobiz logo"/>
				</a>
            
        </div>
    )
}