import { Container } from 'semantic-ui-react';
import Header from '../../components/Header';

interface LayoutProps  { 
  children: React.ReactNode
}

export default function BasicLayout({children}: LayoutProps) {
  return (
    <Container fluid className='basic-layout'>
      <Header />
      <Container className='content'>
        {children}
      </Container>
    </Container>
  )
}
