import { contactDispatcher } from "./contactDispatcher";



const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			contacts: [],
			contactList:[]
			
		},
		actions: {
			
			getContacts: async() => {
				const store = getStore()
				const {contacts} = await contactDispatcher.get()
				setStore({...store, contacts})
				console.log(store.contacts)
				
			},
		
			createContacts: async(contact) => {
				const store = getStore()
				const newContact = await contactDispatcher.post(contact)
				setStore({...store, contactList: [...store.contactList,newContact]})
				console.log(store.contactList)
				getActions().getContacts(); 
			},
			deleteContacts: async(id) => {
				await contactDispatcher.delete(id)
				getActions().getContacts(); 
			},
			updateContacts: async(id,name, address, phone, email) => {
				await contactDispatcher.put(id,name, address, phone, email)
				getActions().getContacts(); 
			}

			
		}
	};
};

export default getState;
