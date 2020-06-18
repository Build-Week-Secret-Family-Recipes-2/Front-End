import React from 'react';
import { Card, Form, Button, FormGroup, Label, Input } from 'reactstrap';

const Register = () => {
    return(
        <>
        <Card style={{ margin: "20px auto", width: "50%" }}>
         <Form style={{ margin: "20px auto"}}>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input type="text" name="firstName" id="firstName" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input type="text" name="lastName" id="lastName" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" />
      </FormGroup>
      <Button color="danger">Sign Up</Button>
      </Form>
      </Card>
        </>
    )
}

export default Register;