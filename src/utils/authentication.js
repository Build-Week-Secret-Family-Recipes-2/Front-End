import axios from 'axios'

export const authentication = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    headers: {Authorization: token},
    baseURL: "https://build-week-recipe-back-end.herokuapp.com"
  })
}