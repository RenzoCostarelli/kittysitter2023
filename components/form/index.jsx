import { useState } from 'react';
import s from './form.module.scss';

export default function FormContainer() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        catName: '',
        dateFrom: '',
        dateTo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const mensaje = `Hola, mi nombre es ${formData.name}. 
                       Quería reservar una Kitty para la fecha ${formData.dateFrom} hasta ${formData.dateTo}.
                       Mi dirección es ${formData.address} y mi gati se llama ${formData.catName}`;

        const phoneNumber = 5493413193402;
        const encodedMensaje = encodeURIComponent(mensaje);
        const sendUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMensaje}`;
        window.open(sendUrl, '_blank').focus();
    };

    return (
        <div className={s.form_container}>
            <form onSubmit={handleSubmit}>
                <div className={s.form_area}>
                    <label htmlFor="name">Nombre y apellido:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className={s.form_area}>
                    <label htmlFor="address">Dirección:</label>
                    <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                    />                    
                </div>
                <div className={s.form_area}>
                    <label htmlFor="catName">Nombre de tu gatito:</label>
                    <input 
                        type="text" 
                        id="catName" 
                        name="catName" 
                        value={formData.catName} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className={s.group}>
                    <div className={s.form_area}>
                        <label htmlFor="dateFrom">Desde:</label>
                        <input 
                            type="date" 
                            id="dateFrom" 
                            name="dateFrom" 
                            value={formData.dateFrom} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className={s.form_area}>
                        <label htmlFor="dateTo">Hasta:</label>
                        <input 
                            type="date" 
                            id="dateTo" 
                            name="dateTo" 
                            value={formData.dateTo} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                </div>
                <div className={s.form_area}>
                    <button type="submit">¡MIAU!</button>
                </div>
            </form>
        </div>
    );
}
