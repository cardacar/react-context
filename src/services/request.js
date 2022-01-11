import axios from 'axios';

export const getUsers = async()=>{
    const response = await axios.get('https://reqres.in/api/users')
    
    return response.data
}

export const getProfile = async (id)=>{
    const response = await axios.get(`https://reqres.in/api/users/${id}`)
    
    return response.data
}