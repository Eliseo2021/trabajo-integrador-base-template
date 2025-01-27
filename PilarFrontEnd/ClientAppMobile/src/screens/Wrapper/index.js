import React from "react"
import { SafeAreaView, ImageBackground, Text, Pressable, View, StatusBar } from "react-native"
import { Icon } from 'react-native-elements';

const image = require('../../assets/images/background0.jpg')

import { styles } from "./styles";

export default (props) => {

  const { title, children } = props;

  return (
      <ImageBackground
        source={image}
        style={styles.image}>
        
        <View style={styles.container}>
          <Pressable
            onPress={() => props.navigate.goBack(null)}
            style={styles.backButton}
          >
            <Icon reverse raised
              name='arrow-back'
              size={20}
              color='#eee'
              iconStyle={{ color: '#8e1537' }}
            />
          </Pressable>

          <Text style={styles.title}> {title} </Text>

          <View style={{ flex: 1 }}></View>

        </View>

        {children}

      </ImageBackground>
  )
}