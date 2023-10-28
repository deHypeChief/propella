import axios from 'axios'
const apiKey = import.meta.env.VITE_API_URL;
const evn = import.meta.env.VITE_NODE_ENV;

const URL = evn == 'production'? `${apiKey}/api/users` : 'http://localhost:8080/api/users'


export async function getCategory(callback){
    const API_URI = `${URL}/categories`

    try {
        const fetchData = await axios.get(API_URI, {
        headers: {},
    })

        return callback(fetchData.data.category)
    } catch (error) {
        console.log(error)
    }
}

export async function createUsers(data, callback, callbackErr){
    const API_URI = `${URL}/create`
    const userData = data
    try {
        const fetchData = await axios.post(API_URI, userData, {
        headers: {},
    })
        alert(`${fetchData.name} \n You have been added to the waitlist`)

        return callback(fetchData)
    } catch (error) {
        return callbackErr(error)
    }
    
}
//done