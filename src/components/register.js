import React, { useState, useEffect } from "react";
import { Card, Form, Button, FormGroup, Label, Input } from "reactstrap";
import * as yup from "yup";
// import axios from 'axios'
import { Link } from "react-router-dom";
import { authentication } from "../utils/authentication";

const Register = (props) => {
  //holds the state of data for users
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  //yup for validation
  const formSchema = yup.object().shape({
    name: yup.string().required("Please enter an name!"),
    email: yup.string().required("Please enter a email!"),
    username: yup.string().required("Please enter your username!"),
    password: yup.string().required("Please enter your password!"),
  });


  //Holds the state of errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  //Checks the form to see if everything is written
  const formValidation = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  //Handles the input changes
  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...userData,
      [e.target.name]: e.target.value,
    };
    formValidation(e);
    setUserData(newFormData);
  };

  //holds state for the button to be disabled until form is filled out
  const [buttonDisabled, setButtonDisabled] = useState(true);

  //Changes the button to being enabled once the form is filled out, and disabled if an input is erased
  useEffect(() => {
    formSchema.isValid(userData).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [userData]);

  //registerHandler goes in onSubmit?

  const registerSubmit = (e) => {
    e.preventDefault()
    authentication()
        .post('https://secretfamrecipes.herokuapp.com/api/auth/register', userData)
        .then(res => {
            console.log('New User Res:', res)
            localStorage.setItem('id', res.data.user_id)
            props.history.push('/api/auth/login')
        })
        .catch(err => console.log('New User Error:', err.message))
};



  return (
    <>
    <div className='accountthings'>
                Register
                
            </div>
    <Card style={{ margin: "20px auto", width: "50%" }}>
      <Form
        style={{ margin: "20px auto" }}
        onSubmit={registerSubmit}
      >
        <FormGroup>
          <Label for="name">name</Label>
          <Input
            type="string"
            name="name"
            id="name"
            placeholder="name"
            value={userData.name}
            onChange={inputChange}
          />
          {errors.name.length > 0 ? <p>{errors.name}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input
            type="string"
            name="email"
            id="email"
            placeholder="email"
            value={userData.email}
            onChange={inputChange}
          />
          {errors.email.length > 0 ? <p>{errors.email}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="string"
            name="username"
            id="username"
            placeholder="username"
            value={userData.username}
            onChange={inputChange}
          />
          {errors.username.length > 0 ? <p>{errors.username}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="password">pass</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={userData.password}
            onChange={inputChange}
          />
          {errors.password.length > 0 ? <p>{errors.password}</p> : null}
        </FormGroup>

        <Button disabled={buttonDisabled} type="submit" color="danger">
          Sign Up
        </Button>
      </Form>
    </Card>

    <div className='accountthings'>
                Back again huh?
                <Link className='login-link' to='/api/auth/login'>Login</Link>
            </div>
    </>
  );
};

export default Register;
