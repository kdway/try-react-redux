import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { mq } from '../responsive';

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  padding: 40px 0;
  background: url('/images/clothes-hanging.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 16px;
  width: 80%;
  background: white;
  ${mq({ width: '40%' }, 600)}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding: 8px 0;
`;

const Input = styled.input`
  flex: 1;
  margin-bottom: 8px;
  padding: 8px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 12px 16px;
  border-radius: 0.3vh;
  background: #319795;
  color: #fff;
  cursor: pointer;
  margin: 16px 0;
  text-transform: uppercase;
  ${mq({ width: '40%' }, 600)}
  &:disabled {
    opacity: 0.6;
  }
`;

const Error = styled.p`
  color: #e53e3e;
`;

const Linkk = styled(Link)`
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #666;
  }
`;


const Login = () => {


  return (
    <>
      <Container>
        <Wrapper>
          <Title>Login</Title>
          <Form onSubmit>
            <Label htmlFor="username">Username</Label>
            <Input
              name="username"
              id="username"
              placeholder="Username"
            
             
            />
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
             
            />
            <Button>Submit</Button>
        
            {/* <Linkk to="/">Forgot password</Linkk> */}
            <Linkk to="/Register">Create new account</Linkk>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
