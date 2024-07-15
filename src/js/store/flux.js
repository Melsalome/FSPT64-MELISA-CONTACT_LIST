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
			},
			deleteContacts: async(id) => {
				await contactDispatcher.delete(id)
			},
			updateContacts: async(id,updatedContacts) => {
				await contactDispatcher.put(id,updatedContacts)
			}

			
		}
	};
};

export default getState;
