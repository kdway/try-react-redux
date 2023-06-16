import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  width: calc(100% - 40px);
  background: white;
  ${mq({ width: '540px' }, 600)}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 16px;
  color: lightblue;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin: 8px 0;
`;

const InputContainer = styled.div`
  flex: auto;
`;

const Label = styled.label`
  display: block;
  padding: 8px 0;
`;

const Input = styled.input`
  padding: 8px;
  width: 100%;
`;

const Helper = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 8px;
`;

const Agreement = styled.p`
  font-size: 12px;
  padding: 8px 0;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 12px 16px;
  background: #319795;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  ${mq({ width: '40%' })}
  &:disabled {
    opacity: 0.6;
  }
`;

const Linkk = styled(Link)`
  margin: 8px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #666;
  }
`;

const ErrorText = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: red;
  width: 100%;
`;

const Register = () => {
 

  return (
    <>
      <Container>
        <Wrapper>
          <Title>SHIPPING</Title>
          {/* TODO: add registration to server!! api/auth/register */}
          <Form>
            <InputContainer>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
               />
          
            </InputContainer>
            <InputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last name"
             
              />
       
            </InputContainer>
            <InputContainer>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
           
              />
            
            </InputContainer>
            <InputContainer>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
             
              />
       
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
           
              />
            
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password2">Confirm password</Label>
              <Input
                type="password"
                name="password2"
                id="password2"
                placeholder="Confirm password"
          
              />
          
            </InputContainer>

            <Agreement>
              I agree to everything by creating an account in accordance to the
              privacy policy.
            </Agreement>

    


            <Linkk to="/Login">I already have an account</Linkk>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
