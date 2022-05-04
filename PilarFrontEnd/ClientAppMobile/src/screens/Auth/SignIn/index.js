import React, { useState } from "react";
import { View, ImageBackground, SafeAreaView, Text, StatusBar, TextInput, TouchableOpacity } from "react-native";
import { Input, Icon, Button, Card } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { actions } from "../../../store";
import { useDispatch } from "react-redux";
import { Formik } from 'formik';
import * as yup from 'yup';

import { styles } from "./style";
const image = require('../../../assets/images/bg-0.jpg');

export default (props) => {
  // Mensajes de Validación del Formulario 
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string("Ingresa tu Email")
      .required("*Email es Campo requerido")
      .email("Ingresa un Email válido"),

    password: yup
      .string('******')
      .required('Contraseña debe ser mayor a 3 caracteres')
      .min(3)
      .max(255),

  });

  const [hiddenPass, setHiddenPass] = useState(true);
  const [iconHiddenPass, setIconHiddenPass] = useState('eye')

  const dispatch = useDispatch()

  const handleHiddenPassButton = () => {
    const hidden = !hiddenPass ? true : false;
    const iconHidden = hidden ? 'eye' : 'eye-slash';
    setIconHiddenPass(iconHidden);
    setHiddenPass(hidden);
  }

  const _signIn = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(true))
    } catch (e) {
      // saving error
    }
    dispatch(actions.user.setUser(true))
  }

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar translucent backgroundColor="transparent" />

      <View style={styles.background}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.title}>Bienvenido a Stadiums</Text>
        </ImageBackground>
      </View>

      <View style={styles.loginContainer}>

        <Card
          containerStyle={styles.cardContainer}
          wrapperStyle={styles.loginCard}>

          <Text style={styles.title2}> Ingresa a Guia de Stadiums Qatar </Text>

          <View style={{ position: "relative", alignItems: "center" }}>


            <Formik
              validateOnMount={true}
              validationSchema={loginValidationSchema}
              initialValues={{ email: '', password: '' }}
              onSubmit={values => console.log(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
              }) => (
                <>

                  <Input
                    label="Email"
                    leftIcon={<Icon name="user" type="font-awesome-5" size={20} />}
                    placeholder="Email@gmail.com"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address" />

                  {(errors.email && touched.email) &&
                    <Text style={styles.errorText}>{errors.email}</Text>
                  }

                  <Input
                    label="Contraseña"
                    leftIcon={<Icon name="lock" type="font-awesome-5" size={20} />}
                    rightIcon={<Icon name={iconHiddenPass} type="font-awesome-5" size={20} onPress={handleHiddenPassButton} color={'#777777'} />}
                    secureTextEntry={hiddenPass}
                    placeholder="********"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    keyboardType="default" />

                  {(errors.password && touched.password) &&
                    <Text style={styles.errorText}>{errors.password}</Text>
                  }

                </>
              )}
            </Formik>

            <Card.Divider />

            <Button
              buttonStyle={{ width: 200, backgroundColor: '#8e1537' }}
              title="Ingresar"
              onPress={() => _signIn()}
            />

          </View>

          <View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Register')}
              style={styles.title2}
            >
              <Text> ¿No tienes una cuenta? REGISTRATE AQUI! </Text>

            </TouchableOpacity>
          </View>
        </Card>

      </View>
    </SafeAreaView>
  )
}
