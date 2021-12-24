import { useMemo } from 'react';
import type { AppProps } from 'next/app';
import '../scss/global.scss';
import 'semantic-ui-css/semantic.min.css';
import BasicLayout from '../layouts/BasicLayout';
import AuthContext from '../context/AuthContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  const login = (token: string) => {
    localStorage.setItem('token', token);
  }
  const authData = useMemo(
    () => ({
      auth: {username: 'test', email: 'test'},
      login
    }), []
  );
  return (
    <AuthContext.Provider value={authData}>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </AuthContext.Provider>
  )
}
