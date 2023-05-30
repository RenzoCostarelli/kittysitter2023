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

        <div className={`${s.modal_container}`}>
          <div className={`${s.grid}`}>
              {/* <div className={`${s.column}`}>
              </div> */}
              <div className={`${s.column}`}>
                  <div className={`${s.title_container} ${s.text_accent_100}`}>
                      <h1>RESERVÁ</h1>
                      <h1>TU VISITA</h1>
                      <p>Aca va un texto que avise que va a whatsapp y que la reserva tiene que ser aceptada previamente</p>
                  </div>
                  {children}
                  <FormContainer />
              </div>
          </div>

          <div className={`${s.closeBtn}`}>
              <button
                className="modal-close"
                type="button"
                onClick={handleClick}
              >
                &#x2715;
              </button>
          </div>
      </div>
      )
}