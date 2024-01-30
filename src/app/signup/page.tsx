"use client"
import React, { useState } from 'react';
import styled from 'styled-components';

const SignupPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 93.2vh;
  background-image: url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  object-fit: contain;
`;

const SignupForm = styled.form`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// React component for the Signup page
export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: any) => {
    e.preventDefault();
    // Add your Signup logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <SignupPageContainer>
      <SignupForm onSubmit={handleSignup}>
        <FormTitle>Sign up</FormTitle>
        <FormGroup>
          <label htmlFor="username">Username</label>
          <InputField
            type="text"
            id="username"
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <InputField
            type="password"
            id="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Sign up</SubmitButton>
      </SignupForm>
    </SignupPageContainer>
  );
};
