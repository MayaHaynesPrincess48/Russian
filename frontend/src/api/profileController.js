import axios from 'axios'
import { END_POINT } from '../config'

export async function createProfile(form) {
  try {
    const res = await axios.post(`${END_POINT}/api/userInfo`, form)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export async function getProfile(id) {
  try {
    const res = await axios.get(`${END_POINT}/api/userInfo/${id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export async function getProfileOne() {
  try {
    const res = await axios.get(`${END_POINT}/api/userInfo/one`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export async function getProfiles() {
  try {
    const res = await axios.get(`${END_POINT}/api/userInfo`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
