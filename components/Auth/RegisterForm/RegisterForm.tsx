import { Form, Button} from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ObjectShape } from 'yup/lib/object';

interface Props {
  showLoginForm: Function;
}

export default function LoginForm({showLoginForm}: Props) {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema:Yup.object(validationSchema),
    onSubmit: (formData) => {
      console.log(formData)
    }
  })

  return (
    <div>
      <h2>Registro</h2>
      <Form className="login-form" onSubmit={formik.handleSubmit}>
        <Form.Input 
          name="username"
          type="text"
          placeholder="Username"
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
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
          <Button onClick={showLoginForm}>Iniciar sesión</Button>
          <Button type="submit">Registrar</Button>
        </div>
      </Form>
    </div>
  )
}

function initialValues(){
  return {
    username: '',
    email: '',
    password: ''
  }
}

function validationSchema(){
  return {
    username: Yup.string().required(true),
    email: Yup.string().required(true),
    password: Yup.string().required(true),
  }
}