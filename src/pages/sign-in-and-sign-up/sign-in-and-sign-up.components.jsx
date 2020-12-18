import React from "react";

import SignIn from  "../../components/signin/signin.components";
import SignUp from "../../components/sign-up/sign-up.components";
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);
export default SignInAndSignUpPage;
