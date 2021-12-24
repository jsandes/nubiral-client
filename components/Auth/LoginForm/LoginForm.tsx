import { Form, Button} from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginApi } from '../../../pages/api/user';
import { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

interface Props {
  showLoginForm: React.MouseEventHandler<HTMLButtonElement>;
  onCloseModal: React.MouseEventHandler<HTMLButtonElement>;
}

type User = {
  username: string;
  email: string;
}

export default function LoginForm({showLoginForm}: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setloading] = useState(false);
  const { login } = useAuth();

  const makeLogin = async (formData: object) => {
    setloading(true);
    const {user, token} = await loginApi(formData);
    login(token)
    setUser(user);
    setloading(false);
  }
  
  useEffect(() => {}, [user]);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema:Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: async (formData) => makeLogin(formData)
  })

  return (
    <div>
      {user ?
        <div>
          <h3>Usuario Logueado</h3>
          <span>Username: {user.username}</span>
          <br />
          <span>Email: {user.email}</span>
        </div>
        : <div>
            <h2>Login</h2>
          <Form className="login-form" onSubmit={formik.handleSubmit}>
            <Form.Input 
              name="email"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange}
              error={formik.errors.email}
            />
            <Form.Input 
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              error={formik.errors.password}
            />
            <div className="actions">
              <Button onClick={showLoginForm}>Registrar</Button>
              <Button type="submit" loading={loading}>Iniciar sesión</Button>
            </div>
          </Form>
        </div>
      }
    </div>
  )
}

function initialValues(){
  return {
    email: '',
    password: ''
  }
}