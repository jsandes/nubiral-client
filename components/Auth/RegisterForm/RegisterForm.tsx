import { Button } from 'semantic-ui-react';

interface Props {
  showLoginForm: Function;
}

export default function LoginForm({showLoginForm}: Props) {
  return (
    <div>
     <h1>RegisterForm</h1>
     <Button onClick={showLoginForm}>Login</Button>
    </div>
  )
}
