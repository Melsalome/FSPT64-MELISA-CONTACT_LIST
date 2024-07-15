import React,{ useContext,useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const ContactCard = () => {
    const {store,actions} = useContext(Context);
   
    console.log(store.contacts)
    return (
        <div className="container" style={{width: "600px"}}>
            <ul>
            {store.contacts.map((contact, index) => (
             <div className="card mb-3" key={index}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="container-contact">
                            <div className="card-body">
                                <h5 className="card-title">{contact.name}</h5>
                                <span className="card-text"><i className="fa-solid fa-location-dot"></i> {contact.address}</span>
                                <span className="card-text"><small className="text-body-secondary"><i className="fa-solid fa-phone"></i> {contact.phone}</small></span>
                                <span className="card-text"><small className="text-body-secondary"><i className="fa-solid fa-envelope"></i> {contact.email}</small></span>
                            </div>
                            <div className="container-contact-icons">
                                <div className="d-grid gap-2">
                                    <Link to={`/demo/${contact}`}>
                                    <i className="fa-solid fa-user-pen"></i>
                                    </Link>
                                    <i className="fa-solid fa-trash" onClick={() => [actions.deleteContacts(contact.id), actions.getContacts()]}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            </ul>
            
        </div>
    )
}