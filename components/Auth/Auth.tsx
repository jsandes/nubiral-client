import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
interface Props {
  onCloseModal: Function;
}
export default function Auth({onCloseModal}: Props) {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => setShowLogin(!showLogin);
  return (showLogin ? 
  <LoginForm showLoginForm={showLoginForm}/>
  : <RegisterForm showLoginForm={showLoginForm}/>)
}
