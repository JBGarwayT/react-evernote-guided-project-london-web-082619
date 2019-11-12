const base_URL = 'http://localhost:3000'
const users_URL = base_URL + '/api/v1/users'
const notes_URL = base_URL + '/api/v1/notes/'

class API {

    static getUsers = () => fetch(users_URL).then(resp => resp.json())

    static getNotes = () => fetch(notes_URL).then(resp => resp.json())

    static updateNote = (id, body) => {
        return fetch(notes_URL + id, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static newNote = (data) => {
        return fetch(notes_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())
    }

}

export default API