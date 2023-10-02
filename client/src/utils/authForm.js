import axios from 'axios'

const URL = 'http://localhost:8080/api/users'


export function getCategory (){
    console.log('red');
    axios.get(`${URL}/categories`)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}