import React from 'react';
import { Card, Form, Button, FormGroup, Label, Input } from 'reactstrap';
// import axios from 'axios'


// const loginHandler = (e) => {
//   e.preventDefault()
//   axios
//       .post('BACK END LOGIN API GOES HERE', loginData)
//       .then(res => {
//           console.log('Login Res:', res)
//           localStorage.setItem('token', res.data.token)
//           history.push('/')
//       })
//       .catch(err => console.log('Login Error:', err.message))
//       .finally(()=> {
//           window.location.reload()
//       })
// }


const Login = () => {
    return(
        <>
        <Card style={{ margin: "20px auto", width: "50%" }}>
         <Form style={{ margin: "20px auto"}}>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" />
      </FormGroup>
      <Button color="danger">Log In</Button>
      </Form>
      </Card>
        </>
    )
}

export default Login;