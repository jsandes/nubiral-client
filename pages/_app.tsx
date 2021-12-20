import type { AppProps } from 'next/app';
import '../scss/global.scss';
import 'semantic-ui-css/semantic.min.css';
import BasicLayout from '../layouts/BasicLayout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  )
}
