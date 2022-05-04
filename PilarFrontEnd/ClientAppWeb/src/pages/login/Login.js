import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Facebook as FacebookIcon } from '../../icons/facebook';
import { Google as GoogleIcon } from '../../icons/google';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: 'demo@devias.io',
      password: 'Password123'
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
        .max(255)
        .required(
          'Password is required')
    }),
    onSubmit: (user) => {
      loginUser(user)
    }
  });

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = (user) => {
    console.log(user.email);
    alert('Usuario aceptado con Exito!');
    Navigate('/');
  }

  return (
    <>
      <Box
        component="main"
        sx={{
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
                Ingresar
              </Typography>
              <Typography
                color="white"
                gutterBottom
                variant="body2"
              >
                Ingresa o Regístrate en la plataforma interna
              </Typography>
            </Box>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  color="info"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  // onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Ingresar con Facebook
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  fullWidth
                  color="error"
                  startIcon={<GoogleIcon />}
                  // onClick={formik.handleSubmit}
                  size="large"
                  variant="contained"
                >
                  Ingresar con Google
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="white"
                variant="body1"
              >
                o Ingresa con tu cuenta
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email"
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
              label="Password"
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
            <Box sx={{ py: 2 }}>
              <Button
                color="secondary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                focused="true"
              >
                Ingresar
              </Button>
            </Box>
            <Typography
              color="white"
              variant="body1"
            >
              ¿No tienes una cuenta?
              {' '}
              <Link to="/signup">
                <Typography
                  color="secondary"
                  variant="body1"
                >
                  Registrate
                </Typography>
              </Link>
            </Typography>
          </form>
        </Container>
      </Box >
    </>
  );
};

export default Login;
