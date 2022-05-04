import React, { useState } from "react";
import { View, ImageBackground, SafeAreaView, Text, StatusBar, TextInput, TouchableOpacity } from "react-native";
import { Input, Icon, Button, Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { actions } from "../../../store";
import { useDispatch } from "react-redux";
import { Formik } from 'formik';
import * as yup from 'yup';

import Wrapper from "../../Wrapper";
import { styles } from "./style";

export default (props) => {
  console.log(props);
  
  const loginValidationSchema = yup.object().shape({
    name: yup
      .string("Ingresa Nombre")
      .required("*Nombre es Campo requerido")
  });

  const dispatch = useDispatch()

  const screenList = () => {
    console.log('This newRow');
    props.navigation.navigate('List')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} translucent={true} backgroundColor="transparent" />
      <Wrapper title={'Nuevo stadium'} navigate={props.navigation}>
        <ScrollView>
          <View style={styles.loginContainer}>

            <Card
              containerStyle={styles.cardContainer}
              wrapperStyle={styles.loginCard}>
              <Text style={styles.title2}> Ingresa los Dados del Stadiums </Text>
              <View style={{ position: "relative", alignItems: "center" }}>
                <Formik
                  validateOnMount={true}
                  validationSchema={loginValidationSchema}
                  initialValues={{ name: '', location: '', capacity: '' }}
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
                        label="Nombre"
                        leftIcon={<Icon name="list" type="font-awesome-5" size={20} />}
                        placeholder="name stadium"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        keyboardType="default" />

                      {(errors.name && touched.name) &&
                        <Text style={styles.errorText}>{errors.name}</Text>
                      }

                      <Input
                        label="Ciudad"
                        leftIcon={<Icon name="home" type="font-awesome-5" size={20} />}
                        placeholder="location"
                        onChangeText={handleChange('location')}
                        onBlur={handleBlur('location')}
                        value={values.location}
                        keyboardType="default" />

                      {(errors.location && touched.location) &&
                        <Text style={styles.errorText}>{errors.location}</Text>
                      }

                      <Input
                        label="Capacidad"
                        leftIcon={<Icon name="user" type="font-awesome-5" size={20} />}
                        placeholder="capacity"
                        onChangeText={handleChange('capacity')}
                        onBlur={handleBlur('capacity')}
                        value={values.capacity}
                        keyboardType="default" />

                      {(errors.capacity && touched.capacity) &&
                        <Text style={styles.errorText}>{errors.capacity}</Text>
                      }

                    </>
                  )}
                </Formik>

                <Card.Divider />

                <Button
                  buttonStyle={{ width: 200, backgroundColor: '#8e1537' }}
                  title="Crear Stadiums"
                  onPress={() => screenList()}
                />

              </View>

            </Card>

          </View>

        </ScrollView>
      </Wrapper>
    </SafeAreaView>
  )
}
