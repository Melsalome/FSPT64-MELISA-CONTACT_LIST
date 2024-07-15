import React, { useContext,useEffect,useState } from "react";
// import {CardName} from "../component/card";
import "../../styles/home.css";
import { Context } from "../store/appContext";

import { ContactCard } from "../component/ContactCard";

    const Home = () => {
	const {store,actions} = useContext(Context);
	


	useEffect (() =>{
        const fetchContacts = async () => {
            await actions.getContacts(); 
        }
		fetchContacts();
	}, [])
	
	
	return (
        <ContactCard/>
	)
};

export default Home
	
		

	
	

 