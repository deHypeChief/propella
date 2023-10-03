import axios from 'axios'

const URL = 'http://localhost:8080/api/users'


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

export async function createUsers(data, callback){
    const API_URI = `${URL}/create`
    try {
        const fetchData = await axios.post(API_URI, {
        headers: {},
        data: data
    })
        return callback(fetchData)
    } catch (error) {
        console.log(error)
    }
    
}