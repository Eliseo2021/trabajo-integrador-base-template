import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  TextField,
  Typography
} from '@mui/material';

import { addUser } from '../../redux/actions/users/usersActions';

const Signup = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      policy: false
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      password: Yup
        .string()
        .min(3)
        .max(255)
        .required(
          'Password is required: 3 - 255 characters'),
      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'This field must be checked'
        )
    }),

    onSubmit: (user) => {
      RegisterUser(user);
    }

  });

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const RegisterUser = (user) => {
    console.log(user.email);
    dispatch(addUser(user));
    alert('Usuario Creado con Exito!');
    Navigate('/');
  }

  return (
    <>
      <Box
        component="main"
        sx={{
          color: '#fff',
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="white"
                variant="h4"
              >
                Crear cuenta
              </Typography>
              <Typography
                color="white"
                gutterBottom
                variant="body2"
              >
                usa tu email para crear una cuenta
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email@correo.com"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
              color="secondary"
              focused="true"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Contraseña"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
              color="secondary"
              focused="true"
            />
            <Box
              sx={{
                color: '#fff',
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
                color="secondary"
                focused="true"
              />
              <Typography
                color="white"
                variant="body2"
              >
                Acepto
                {' '}
                los terminos y condiciones
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"

              >
                Registrarse
              </Button>
            </Box>
            <Typography
              color="white"
              variant="body2"
            >
              Ya Tienes cuenta?
              {' '}
              <Link to="/login">
                <Typography
                  color="secondary"
                  variant="body1"
                >
                  Ingresar
                </Typography>
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Signup;

