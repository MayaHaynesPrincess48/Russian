import axios from 'axios'
import { END_POINT } from '../config' 


export async function sendEvent(data) {
    try {
        const response = await axios.post(`${END_POINT}/api/events`, data) 
        return response.data
    } catch (error) {
        console.log(error) 
    }
}

export async function getEvents() {
    try {
        const response = await axios.get(`${END_POINT}/api/events`) 
        return response.data
    } catch (error) {
        console.log(error) 
    }
}