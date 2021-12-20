import { Container } from 'semantic-ui-react'

interface LayoutProps  { 
  children: React.ReactNode
}

export default function BasicLayout({children}: LayoutProps) {
  return (
    <Container fluid className='basic-layout'>
      <Container className='content'>
        {children}
      </Container>
    </Container>
  )
}
