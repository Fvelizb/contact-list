const API_URL = 'https://playground.4geeks.com/contact/agendas/fveliz/contacts';

export const addContact = (contact) => {
  return async (dispatch) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    });

    if (response.ok) {
      dispatch(fetchContacts());
    } else {
      console.error('Failed to add contact');
    }
  };
};

export const setContacts = (contacts) => ({
  type: 'SET_CONTACTS',
  payload: contacts,
});

export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(API_URL);

      if (response.ok) {
        const data = await response.json();
        console.log('API response data:', data); 
        dispatch(setContacts(Array.isArray(data.contacts) ? data.contacts : []));
      } else {
        console.error('Failed to fetch contacts');
      }
    } catch (error) {
      console.error('Fetch contacts error:', error);
    }
  };
};

export const deleteContact = (id) => {
  return async (dispatch) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      dispatch(fetchContacts());
    } else {
      console.error('Failed to delete contact');
    }
  };
};

export const updateContact = (contact) => {
  return async (dispatch) => {
    const response = await fetch(`${API_URL}/${contact.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    });

    if (response.ok) {
      dispatch(fetchContacts());
    } else {
      console.error('Failed to update contact');
    }
  };
};