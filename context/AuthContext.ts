import { createContext } from 'react';

const AuthContext = createContext({
  auth: {username: '', email: ''},
  login: (token: string) => {},
});

export default AuthContext;