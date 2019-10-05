import React from 'react';
import styles from './LoginCard.module.css'
import {
  Card, CardBody,
  CardTitle,  Button,
  Form, Label, Input,
  FormGroup
} from 'reactstrap';

const Login = (props) => {
  return (
    <div className={styles.LoginCard}>
      <Card className="shadow-lg p-3 mb-5 bg-white rounded mx-auto">
        <CardBody>
          <CardTitle>Card title</CardTitle>
  
          <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Label check>
            <Input type="checkbox" />{' '}
            Remember me
        </Label>
        <a href="/#"><b>Forgot your password?</b></a>
        </Form>

          <Button>Sign in to your account</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;