import React, { useState } from "react";
import { Card, Form, Button, FormGroup, Label, Input } from 'reactstrap';
// import axios from 'axios'
import { Link } from "react-router-dom";
import { authentication } from "../utils/authentication";

const initialState = {
  username: "",
  password: "",
  isFetching: false
};



const Login = (props) => {

  const [inputValues, setInputValues] = useState(initialState);

  const handleChange = e => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

const loginHandler = (e) => {
  e.preventDefault()
  authentication()
      .post('/api/auth/login', inputValues)
      .then(res => {
          console.log('Login Res:', res)
          localStorage.setItem('token', res.data.message)
          localStorage.setItem('id', res.data.user_id)
          props.history.push('/api/recipes')
      })
      .catch(err => console.log('Login Error:', err.message))
      .finally(()=> {
          window.location.reload()
      })
}



    return(
        <>

          <div className='accountthing'>
                Login
                
            </div>
        <Card style={{ margin: "20px auto", width: "50%" }}>
         <Form style={{ margin: "20px auto"}} onSubmit={loginHandler}>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" placeholder="Username" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" onChange={handleChange} />
      </FormGroup>
      <Button color="danger" type="submit">Log In</Button>
      </Form>
      </Card>

      <div className='accountthings'>
                No account?
                <Link className='login-link' to='/api/auth/register'>Register</Link>
            </div>
        </>
    )
}

export default Login;