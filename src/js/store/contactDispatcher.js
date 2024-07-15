export const contactDispatcher = {
    get: async() => {
        const response = await fetch ('https://playground.4geeks.com/contact/agendas/melisa/contacts', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        return await response.json()
    },
    post: async(contact) => {
        const response = await fetch ('https://playground.4geeks.com/contact/agendas/melisa/contacts', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify (contact)
        })
        return await response.json()
    },
    put: async(id,updatedContacts) => {
        const response = await fetch (`https://playground.4geeks.com/contact/agendas/melisa/contacts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify (updatedContacts)
        })
        return await response.json()
    },
    delete: async(id) => {
        const response = await fetch (`https://playground.4geeks.com/contact/agendas/melisa/contacts/${id}`, {
            method: 'DELETE',
    })
      
}
}