import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../actions/contactActions';

const Contact = ({ contact, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('¿Seguro que quieres borrar este contacto?')) {
      dispatch(deleteContact(contact.id));
    }
  };

  return (
    <div className="contact">
      <h3>{contact.name}</h3>
      <p>{contact.address}</p>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <div className="contact-buttons">
        <button onClick={() => onEdit(contact)} style={{ marginRight: '10px' }}>Editar</button>
        <button onClick={handleDelete}>Borrar</button>
      </div>
    </div>
  );
};

export default Contact;