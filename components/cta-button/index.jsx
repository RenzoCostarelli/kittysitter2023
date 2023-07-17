import s from './cta-button.module.scss'
import useStore from '../../lib/store'

function KittyBtn({color}) {
  return (
    <div className={`${s.nav_button_container} ${s.be_a_kitty}`} data-color={color}>
      <a href="https://docs.google.com/forms/d/1ewLKJZfqE_XkUHjG7Uk45901o3fO94Dv_Ipx6G2uMxE/viewform?edit_requested=true" target="blank">
        <div>
          Sé una Kitty
        </div>
      </a>
    </div>
  )
}

function ReviewsBtn(color) {
  return (
    <div className={`${s.nav_button_container} ${s.reviews}`}>
      <a href="https://shorturl.at/ryNX3" target='blank'>
        <div>
          Todas las reseñas
        </div>
      </a>
    </div>
  )
}
function NavBtn(color) {
  const toggleForm = useStore((state) => state.toggleForm);

  const handleClick = (event) => {
    event.preventDefault();
    toggleForm();
  };

  return (
    <>
    <div className={`${s.nav_button_container} ${s.appointment}`}>
      <button type="button" onClick={handleClick}>
        <div>
          Consultas
        </div>
      </button>
    </div>
    </>
  )
}


export default function CtaButton({type}) {
    
    return (<>
        { type === 'form' &&
          <NavBtn />
        }
        { type === 'kittyForm' &&
          <KittyBtn color={'#B2A4FF'}/>
        }
        { type === 'reviews' &&
          <ReviewsBtn />
        }
        </>  
    )
  }

