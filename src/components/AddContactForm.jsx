import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../actions/contactActions';

const AddContactForm = ({ onHideForm }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(contact));
    setContact({ name: '', email: '', phone: '', address: '' });
    onHideForm();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Añadir Nuevo Contacto</h2>
      <input type="text" name="name" placeholder="Nombre" value={contact.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Correo" value={contact.email} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Teléfono" value={contact.phone} onChange={handleChange} />
      <input type="text" name="address" placeholder="Dirección" value={contact.address} onChange={handleChange} />
      <button type="submit">Guardar</button>
      <p><a href="#" onClick={onHideForm}>Vuelve a la lista de contactos</a></p>
    </form>
  );
};

export default AddContactForm;