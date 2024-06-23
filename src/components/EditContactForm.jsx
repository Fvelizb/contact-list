import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../actions/contactActions';

const EditContactForm = ({ contact, onHideForm }) => {
  const [updatedContact, setUpdatedContact] = useState(contact);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUpdatedContact({
      ...updatedContact,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContact(updatedContact));
    onHideForm();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Editar contacto</h2>
      <input type="text" name="name" placeholder="Nombre" value={updatedContact.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Correo" value={updatedContact.email} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Teléfono" value={updatedContact.phone} onChange={handleChange} />
      <input type="text" name="address" placeholder="Dirección" value={updatedContact.address} onChange={handleChange} />
      <button type="submit">Guardar</button>
      <p><a href="#" onClick={onHideForm}>Vuelve a la lista de contactos</a></p>
    </form>
  );
};

export default EditContactForm;