import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface Props {
  showLoginForm: React.MouseEventHandler<HTMLButtonElement>;
  onCloseModal: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Auth({onCloseModal}: Props) {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => setShowLogin(!showLogin);
  return (showLogin ? 
  <LoginForm showLoginForm={showLoginForm} onCloseModal={onCloseModal}/>
  : <RegisterForm showLoginForm={showLoginForm} onCloseModal={onCloseModal}/>)
}
