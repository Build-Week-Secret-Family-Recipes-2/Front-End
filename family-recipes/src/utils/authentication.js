import axios from 'axios'

export const authentication = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    headers: {Authorization: token},
    baseURL: "Back End Api Goes Here"
  })
}