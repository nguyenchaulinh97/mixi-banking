import React, { useState } from "react";

import { transform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";

import { Logo } from "../../assets/images";
import useAuth from "../../contexts/auth";
import AuthLayout from "../_layouts/auth";
import { ANIMATION } from "./animations";
import { AnimatedContainer, Form, SignInButton } from "./styles";

const InputDiv = styled.div`
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const SignIn = () => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { colors } = useTheme();

  const inputRange = [0, 4];
  const outputRange = [colors.lightGrey, colors.primary];
  const animateBackground = transform(inputRange, outputRange);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    signIn(inputValue);
    navigate("/dashboard");
  };

  return (
    <AuthLayout background={animateBackground(inputValue.length)}>
      <AnimatedContainer
        variants={ANIMATION}
        initial="unMounted"
        animate="mounted"
        exit="unMounted"
      >
        <h1>
          <Logo />
        </h1>
        <h2>MIXI BANKING</h2>
        <Form onSubmit={handleFormSubmit}>
          <label htmlFor="name">
            <InputDiv>
              <input
                name="name"
                placeholder="Nhập mã PIN"
                value={inputValue}
                onChange={handleInputChange}
                type="text"
              />
            </InputDiv>
          </label>
          <SignInButton type="submit" disabled={!inputValue}>
            Truy cập
          </SignInButton>
        </Form>
      </AnimatedContainer>
    </AuthLayout>
  );
};

export default SignIn;
