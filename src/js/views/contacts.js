import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext';
import { Navigate, useNavigate, navigate } from 'react-router';
import { Link } from 'react-router-dom';
import ContactCard from '../component/ContactCard';



const Contacts = () => {
  const { store, actions } = useContext(Context);

  
  useEffect( () => {
    actions.getContactList();
  },[])
    

  return (
    <div className='contacts-page'>
    <Link to="/add-contact-form">
      <button className='addContact'>Add New Contact</button>
    </Link>
    {store.contacts.map((contact) => (
      <ContactCard key={contact.id} contact={contact}/>
    ))}
    </div>
  )
}

export default Contacts;
