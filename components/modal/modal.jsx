import FormContainer from '../form'
import s from './modal.module.scss'
import { useState } from 'react'
import useStore from '../../lib/store'
import ReactDOM, { createPortal } from 'react-dom'


export default function ModalContainer({ isOpen, onClose, children }) {
  const toggleForm = useStore((state) => state.toggleForm);

  const handleClick = () => {
    toggleForm();
  };

  

    return (

        <div className={`${s.modal_container}`} id="fixed-target" >
          <div className={`${s.grid}`} data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
              <div className={`${s.column}`}>
                  <div className={`${s.title_container} ${s.text_accent_100}`}>
                    <h1>RESERVÁ TU VISITA</h1>
                  </div>
                  {children}
                  <FormContainer />
              </div>
          </div>

          <div className={`${s.closeBtn}`}>
              <button
                className={`${s.close}`}
                type="button"
                onClick={handleClick}
              >
                &#x2715;
              </button>
          </div>
      </div>
      )
}