import React, { useState } from 'react';
import AddContactForm from './components/AddContactForm';
import EditContactForm from './components/EditContactForm';
import ContactList from './components/ContactList';
import './styles.css';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);

  const handleShowForm = () => {
    setShowForm(true);
    setShowEditForm(false);
  };

  const handleHideForm = () => {
    setShowForm(false);
    setShowEditForm(false);
  };

  const handleEditContact = (contact) => {
    setContactToEdit(contact);
    setShowEditForm(true);
    setShowForm(false);
  };

  return (
    <div className="container">
      {showForm ? (
        <AddContactForm onHideForm={handleHideForm} />
      ) : showEditForm ? (
        <EditContactForm contact={contactToEdit} onHideForm={handleHideForm} />
      ) : (
        <div>
          <button onClick={handleShowForm} className="add-contact-button">Añadir Nuevo Contacto</button>
          <ContactList onEditContact={handleEditContact} />
        </div>
      )}
    </div>
  );
};

export default App;