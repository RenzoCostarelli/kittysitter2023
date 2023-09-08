import Image from "next/image";

import s from './news-logos-list.module.scss'

export default function Medios() {
    return(
        <div className={`${s.logos_list} ${s.d_flex} ${s.gap_2} ${s.pb_2} ${s.pbot_0} ${s.flex_align_center} ${s.flex_justify_center} ${s.text_center}`}>
            
                <a href="https://www.lacapital.com.ar/la-ciudad/la-comunidad-gatuna-ya-no-esta-sola-ahora-cuenta-nineras-domicilio-n2636665.html" className={ s.news_link} target="_blank" rel="noreferrer">
					<Image src="/images/logos/capital.webp" fill sizes="384px" alt="La Capital logo" priority/>
				</a>
                <a href="https://conlagentenoticias.com/kitty-sitter-un-emprendimiento-que-llego-a-rosario-para-ocuparse-de-los-gatos/" className={ s.news_link} target="_blank" rel="noreferrer">
					<Image src="/images/logos/cnoticias.webp" fill sizes="384px" alt="cnoticias logo" priority/>
				</a>
                <a href="https://www.on24.com.ar/negocios/ideo-un-emprendimiento-y-fue-el-mejor-trabajo-del-mundo/" target="_blank" className={ s.news_link} rel="noreferrer">
					<Image src="/images/logos/logo-on24.webp" fill sizes="212px" alt="on24 logo" priority/>
				</a>
                <a href="https://puntobiz.com.ar/negocios/2020-3-6-13-0-0-hello-kitty-armo-un-equipo-de-nineras-para-cuidar-gatos-a-domicilio" target="_blank" className={ s.news_link} rel="noreferrer">
					<Image src="/images/logos/puntobiz.webp" fill sizes="185px" alt="puntobiz logo" priority/>
				</a>
            
        </div>
    )
}