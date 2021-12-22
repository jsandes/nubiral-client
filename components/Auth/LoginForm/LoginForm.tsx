import { Button } from 'semantic-ui-react';

interface Props {
  showLoginForm: Function;
}

export default function LoginForm({showLoginForm}: Props) {
  return (
    <div>
      <h1>LoginForm</h1>
      <Button onClick={showLoginForm}>Registrate</Button>
    </div>
  )
}
