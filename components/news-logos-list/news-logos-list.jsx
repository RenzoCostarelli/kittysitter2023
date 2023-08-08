import Image from "next/image";

import s from './news-logos-list.module.scss'

export default function Medios() {
    return(
        <div className={`${s.logos_list} ${s.d_flex} ${s.gap_2} ${s.pb_2} ${s.pbot_0} ${s.flex_align_center} ${s.flex_justify_center} ${s.text_center}`}>
            
                <a href="#" className={ s.news_link}>
					<Image src="/images/logos/capital.webp" fill sizes="384px" alt="La Capital logo" priority/>
				</a>
                <a href="#" className={ s.news_link}>
					<Image src="/images/logos/cnoticias.webp" fill sizes="384px" alt="cnoticias logo" priority/>
				</a>
                <a href="#" className={ s.news_link}>
					<Image src="/images/logos/logo-on24.webp" fill sizes="212px" alt="on24 logo" priority/>
				</a>
                <a href="#" className={ s.news_link}>
					<Image src="/images/logos/puntobiz.webp" fill sizes="185px" alt="puntobiz logo" priority/>
				</a>
            
        </div>
    )
}