import React, { useState, useEffect } from "react";
import { Card, Form, Button, FormGroup, Label, Input } from "reactstrap";
import * as yup from "yup";
// import axios from 'axios'

const Register = () => {
  //holds the state of data for users
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  //yup for validation
  const formSchema = yup.object().shape({
    email: yup.string().email().required("Please enter an email!"),
    password: yup.string().required("Please enter a password!"),
    firstName: yup.string().required("Please enter your first name!"),
    lastName: yup.string().required("Please enter your last name!"),
    userName: yup.string().required("Please enter a Username!"),
  });

  //submits the form
  const submitForm = (e) => {
    yup
      .reach(formSchema)
      .validate(userData)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Holds the state of errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
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

//   const registerHandler = (e) => {
//     e.preventDefault()
//     axios
//         .post('BACK END REGISTER API GOES HERE', userData)
//         .then(res => {
//             console.log('New User Res:', res)
//             window.localStorage.setItem('id', res.data.data.id)
//             history.push('/login')
//         })
//         .catch(err => console.log('New User Error:', err.message))
// }


  return (
    <Card style={{ margin: "20px auto", width: "50%" }}>
      <Form
        style={{ margin: "20px auto" }}
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            value={userData.firstName}
            onChange={inputChange}
          />
          {errors.firstName.length > 0 ? <p>{errors.firstName}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={userData.lastName}
            onChange={inputChange}
          />
          {errors.lastName.length > 0 ? <p>{errors.lastName}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="userName">Username</Label>
          <Input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
            value={userData.userName}
            onChange={inputChange}
          />
          {errors.userName.length > 0 ? <p>{errors.userName}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={userData.email}
            onChange={inputChange}
          />
          {errors.email.length > 0 ? <p>{errors.email}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={userData.password}
            onChange={inputChange}
          />
          {errors.password.length > 0 ? <p>{errors.password}</p> : null}
        </FormGroup>
        <Button disabled={buttonDisabled} color="danger">
          Sign Up
        </Button>
      </Form>
    </Card>
  );
};

export default Register;
