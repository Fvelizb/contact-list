import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from './Contact';
import { fetchContacts } from '../actions/contactActions';

const ContactList = ({ onEditContact }) => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    console.log('Fetched contacts:', contacts);
  }, [contacts]);

  return (
    <div className="contact-list">
      <h2>Lista de Contactos</h2>
      {contacts && contacts.length > 0 ? (
        contacts.map(contact => (
          <Contact key={contact.id} contact={contact} onEdit={onEditContact} />
        ))
      ) : (
        <p>No hay contactos.</p>
      )}
    </div>
  );
};

export default ContactList;