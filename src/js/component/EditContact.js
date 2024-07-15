import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { navigate, useNavigate } from 'react-router';

const EditContact = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();
    const [updatedContact, setUpdatedContact] = useState({
        name: '',
        address: '',
        phone: '',
        email: ''
    });
useEffect( () => {
	actions.getContacts()
},[])
    useEffect(() => {
		
		console.log(store.contacts)
        const contactToEdit = store.contacts.find(contact => contact.id == id);
        if (contactToEdit) {
            setUpdatedContact(contactToEdit);
        }
		console.log(contactToEdit)
    }, [id, store.contacts]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatedContact(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const saveInfo = async (event) => {
        event.preventDefault();
        await actions.updateContacts(id, updatedContact.name, updatedContact.address, updatedContact.phone, updatedContact.email);
        actions.getContacts(); 
        navigate("/");
    };

    return (
        <div className="container">
            <h1>Edit Contact</h1>
            <form> 
                <div className="mb-3">
                    <label htmlFor="input1" className="form-label">Full Name</label>
                    <input onChange={handleChange} name="name" value={updatedContact.name} type="text" className="form-control" id="input1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="input2" className="form-label">Email</label>
                    <input onChange={handleChange} name="email" value={updatedContact.email} type="text" className="form-control" id="input2" />
                </div>
                <div className="mb-3">
                    <label htmlFor="input3" className="form-label">Phone number</label>
                    <input onChange={handleChange} name="phone" value={updatedContact.phone} type="text" className="form-control" id="input3" />
                </div>
                <div className="mb-3">
                    <label htmlFor="input4" className="form-label">Address</label>
                    <input onChange={handleChange} name="address" value={updatedContact.address} type="text" className="form-control" id="input4" />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit" onClick={saveInfo}>Save</button>
                </div>
                <Link to="/">
                    <button className="btn btn-primary">Back home</button>
                </Link>
            </form>
        </div>
    );
};

export default EditContact;
