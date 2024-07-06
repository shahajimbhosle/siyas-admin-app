import { FormikProvider, useFormik } from "formik";
import yup from "../../yup";
import FormikFieldControl from "../common/formik-field-control";
import { Button, Form } from "rsuite";
// import { useAuth } from "../../hooks";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  username: yup
    .string()
    .required("Email / Mobile Number is required.")
    .isValidUsername("Invalid Email or Mobile Number."),
  password: yup.string().required("Password is required."),
});

const LoginForm = () => {
  //   const { setAuth } = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const handleLogin = (values) => {
    // setAuth(values);
    navigate("/");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleLogin,
  });

  const { handleSubmit } = formik;

  return (
    <FormikProvider value={formik}>
      <Form fluid onSubmit={handleSubmit}>
        <FormikFieldControl name="username" label="Email / Mobile Number" />
        <FormikFieldControl name="password" label="Password" type="password" />
        <Form.Group>
          <Button appearance="primary" block type="submit">
            Sign in
          </Button>
        </Form.Group>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
