import React, { useEffect, useState } from "react";
import { View, Image, StatusBar, TouchableOpacity, Pressable } from "react-native";
import { Card, Text, Button, Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../../store";

import Wrapper from "../../Wrapper";
import { styles } from './styles'

export default (props) => {

  const stadiums = useSelector((state) => state.stadiums.stadiums);


  return (
    <SafeAreaView style={styles.container}>

      <StatusBar hidden={true} translucent={true} backgroundColor="transparent" />

      <Wrapper title={stadium && stadium.stadiumname} navigate={props.navigation}>

        <ScrollView>

          <View style={styles.mainContent}>

            <View style={{ flex: 1, flexDirection: 'row', marginTop: 80 }}>

              <View style={styles.dataContent}>
                <Text style={styles.label}> Capacidad: </Text>
                <Text style={styles.label}>{stadium && stadium.capacity}</Text>
              </View>

              <View style={styles.dataContent}>
                <Text style={styles.label}> Ciudad: </Text>
                <Text style={styles.label}>{stadium && stadium.location}</Text>
              </View>

            </View>

            <View style={{ flex: 1 }}>
              <Image source={{ uri: stadium && stadium.imageURL }} style={styles.image} />

              <Pressable
                onPress={() => props.navigation.navigate('Map', props = { stadium })}
                style={[styles.buttonContent]}
              >
                <Text style={styles.title}> Ir al Mapa</Text>
                <Icon
                  name="map"
                  color="#ffffff"
                  backgroundColor='blue'
                  iconStyle={{ margin: 5 }}
                />

              </Pressable>


            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>

              <View style={{ flex: 1 }}>
                <Card style={styles.cardPokeInfo}>
                  <Card.Title>  Descripcion </Card.Title>
                  <Card.Divider />
                  <View style={styles.cardView}>
                    <Text>{stadium && stadium.description}</Text>
                  </View>
                </Card>
              </View>

            </View>

            <View style={{ flex: 1 }}>

              <Pressable
                // onPress={() => props.navigation.navigate('Photo', props = { stadium })}
                style={[styles.buttonContent]}
              >
                <Text style={styles.title}> Galeria </Text>
                <Icon
                  name="photo"
                  color="#ffffff"
                  backgroundColor='blue'
                  iconStyle={{ margin: 5 }}
                />

              </Pressable>
              <Image source={{ uri: stadium.imageURL }} style={styles.image} />

            </View>


          </View>

        </ScrollView>


      </Wrapper>

    </SafeAreaView>
  )
}

