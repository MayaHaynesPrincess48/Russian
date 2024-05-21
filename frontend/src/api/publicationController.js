import axios from 'axios'
import { END_POINT } from '../config'

export async function createPublication(form) {
  try {
    const res = await axios.post(`${END_POINT}/api/publications`, form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export async function getPublication() {
  try {
    const res = await axios.get(`${END_POINT}/api/publications`)
    return res.data 
  } catch (error) {
    console.log(error) 
  }
}

export async function likePublication(id) {
  try {
    const res = await axios.put(`${END_POINT}/api/publications/${id}/like`)
    return res.data 
  } catch (error) {
    console.log(error)
  }
}
export async function unlikePublication(id) {
  try {
    const res = await axios.put(`${END_POINT}/api/publications/${id}/unlike`)
    return res.data 
  } catch (error) {
    console.log(error)
  }
}
export async function viewPublication(id) {
  try {
    const res = await axios.put(`${END_POINT}/api/publications/${id}/view`)
    return res.data 
  } catch (error) {
    console.log(error)
  }
}
export async function favouritesPublication(id) {
  try {
    const res = await axios.put(`${END_POINT}/api/publications/${id}/favourites`)
    return res.data 
  } catch (error) {
    console.log(error)
  }
}