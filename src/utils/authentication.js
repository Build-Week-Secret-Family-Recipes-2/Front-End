import axios from 'axios'

export const authentication = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    baseURL: "https://secretfamrecipes.herokuapp.com",
    headers: {
      Authorization: token},
  })
}