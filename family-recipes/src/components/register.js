import React, { useState } from "react";
import { Card, Form, Button, FormGroup, Label, Input } from "reactstrap";
import * as yup from "yup";

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const formSchema = yup.object().shape({
    firstName: yup.string().required("Please enter your name!"),
    lastName: yup.string().required("Please enter your name!"),
    email: yup.string().required("Please enter an email!"),
    password: yup.string().required("Please enter a password!"),
  });

  const submitForm = () => {
    formSchema
      .validate(userData)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Username"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="danger">Sign Up</Button>
      </Form>
    </Card>
  );
};

export default Register;
