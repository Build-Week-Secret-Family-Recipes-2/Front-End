import React, { useState } from "react";
import { Card, Form, Button, FormGroup, Label, Input } from "reactstrap";
import * as yup from "yup";

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const formSchema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name!"),
    lastName: yup.string().required("Please enter your last name!"),
    userName: yup.string().required("Please enter a Username!"),
    email: yup.string().required("Please enter an email!"),
    password: yup.string().required("Please enter a password!"),
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const submitForm = (e) => {
    formSchema
      .validate(userData)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formValidation = (e) => {
    formSchema
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

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...userData,
      [e.target.name]: e.target.value,
    };
    formValidation(e);
    setUserData(newFormData);
  };

  // (From Alex) ??
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Card style={{ margin: "20px auto", width: "50%" }}>
      <Form
        style={{ margin: "20px auto" }}
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
          console.log(userData);
        }}
      >
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Username"
            value={userData.firstName}
            onChange={(handleChange, inputChange)}
          />
          {errors.firstName.length > 0 ? <p>{errors.firstName}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="last Name"
            value={userData.lastName}
            onChange={(handleChange, inputChange)}
          />
          {errors.lastName.length > 0 ? <p>{errors.Lastname}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="userName">Username</Label>
          <Input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
            value={userData.userName}
            onChange={(handleChange, inputChange)}
          />
          {errors.userName.length > 0 ? <p>{errors.userName}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
            value={userData.email}
            onChange={(handleChange, inputChange)}
          />
          {errors.email.length > 0 ? <p>{errors.email}</p> : null}
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
            value={userData.password}
            onChange={(handleChange, inputChange)}
          />
          {errors.password.length > 0 ? <p>{errors.password}</p> : null}
        </FormGroup>
        <Button color="danger">Sign Up</Button>
      </Form>
    </Card>
  );
};

export default Register;
