import { useState } from 'react';
import s from './form.module.scss'

export default function FormContainer() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [catName, setCatName] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you can send the form data to your server or process it in some other way
      console.log('Form submitted!');
    };
  
    return (
        <div className={`${s.form_container}`}>
            <form onSubmit={handleSubmit} >
                <div className={`${s.form_area}`}>
                    <label for="name">Nombre y apellido:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className={`${s.form_area}`}>
                    <label for="address">Dirección:</label>
                    <input type="text" id="address" name="address" required />                    
                </div>
                <div className={`${s.form_area}`}>
                    <label for="catname">Nombre de tu gatito:</label>
                    <input type="text" id="catname" name="catname" required />
                </div>
                <div className={`${s.group}`}>
                    <div className={`${s.form_area}`}>
                        <label for="datefrom">Desde:</label>
                        <input type="date" id="datefrom" name="datefrom" required />
                    </div>
                    <div className={`${s.form_area}`}>
                        <label for="dateto">Hasta:</label>
                        <input type="date" id="dateto" name="dateto" required />
                    </div>
                </div>
                <div className={`${s.form_area}`}>
                    <button type="submit">¡MIAU!</button>
                </div>
            </form>
        </div>
    )
}