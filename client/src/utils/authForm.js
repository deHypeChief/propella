import axios from 'axios'
const apiKey = import.meta.env.VITE_API_URL;
const evn = import.meta.env.VITE_NODE_ENV;

const URL = `https://propella-iota.vercel.app/api/users`
const L_url = 'http://localhost:8080/api/users'
const options = {
    headers: {
        'Access-Control-Allow-Origin': ['https://www.propella.tech/', 'https://site-propella.vercel.app', 'http://localhost:5173'],
    },
}


export async function getCategory(callback){
    const API_URI = `${URL}/categories`

    try {
        const fetchData = await axios.get(API_URI, options)

        return callback(fetchData.data.category)
    } catch (error) {
        console.log(error)
    }
}

export async function createUsers(data, callback, callbackErr){
    const API_URI = `${URL}/create`
    const userData = data
    try {
        const fetchData = await axios.post(API_URI, userData, options)
        return callback(fetchData)
    } catch (error) {
        alert('Error in creating your account, Try again')
        return callbackErr(error)
    }
    
}
//done