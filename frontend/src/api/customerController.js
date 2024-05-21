import axios from 'axios'
import { END_POINT } from '../config' 

export async function createCustomer(form) {
  try {
    const res = await axios.post(`${END_POINT}/api/reviews`, form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }) 
    return res.data 
  } catch (error) {
    console.log(error) 
  }
}

export async function getCustomer() {
  try {
    const res = await axios.get(`${END_POINT}/api/reviews`)
    return res.data 
  } catch (error) {
    console.log(error) 
  }
}