import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

    const AddContact = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()
	const [data, setData] = useState({name:"", email:"", phone:"", address:""})
	const saveInfo = (e) => {
		e.preventDefault();
		actions.createContacts(data);
		setData({name:"", email:"", phone:"", address:""})
		
        navigate("/");
	}
	const info = (e) => {
		setData({
			...data,[e.target.name]: e.target.value
		})
	}


	
	return (
		<div className="container">
			<h1>Add new Contact</h1>
			<form> 
			<div className="mb-3">
					<label htmlFor="input1" className="form-label">Full Name</label>
					<input onChange={info} name="name" value={data.name} type="text" className="form-control" id="input1" placeholder="Enter Full Name"/>
				</div>
				<div className="mb-3">
					<label htmlFor="input2" className="form-label">Email</label>
					<input onChange={info} name="email" value={data.email} type="text" className="form-control" id="input2" placeholder="Enter Email"/>
				</div>
				<div className="mb-3">
					<label htmlFor="input3" className="form-label">Phone number</label>
					<input onChange={info} name="phone" value={data.phone} type="text" className="form-control" id="input3" placeholder="Enter Phone Number"/>
				</div>
				<div className="mb-3">
					<label htmlFor="input4" className="form-label">Address</label>
					<input onChange={info} name="address" value={data.address} type="text" className="form-control" id="input4" placeholder="Enter Address"/>
				</div>
			</form>	
				
				
			<div className="d-grid gap-2">
  				<button className="btn btn-primary" type="submit" onClick={saveInfo}>Save</button>
			</div>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

export default AddContact

