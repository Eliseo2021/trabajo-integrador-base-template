import React, { Component, useCallback } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    ImageBackground,
    Alert,
    StatusBar
} from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './styles'


const image = require('../../assets/images/background0.jpg')
const icons = { size: 40, color: '#eee' }

export default Home = (props) => {

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar translucent backgroundColor="transparent" />

            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.title2}>Guia Stadiums Qatar 2022</Text>
                <View style={styles.mainContent}>
                    <View style={styles.rowContent}>
                        <Pressable
                            onPress={() => Alert.alert(
                                'Estas en HOME...',
                                'Por Favor-> Selecciona otro Boton para ir a otra Pagina',
                                'PilarTecno 2022'
                                [{ text: "OK", onPress: () => console.log("OK Pressed") }]
                            )}
                                style = { [styles.buttonContent]}
                        >
                            <Text style={styles.title}>Home</Text>

                            <Icon
                                name='home'
                                color={icons.color}
                                size={icons.size}
                            />

                        </Pressable>
                        <Pressable
                            onPress={() => props.navigation.navigate('List')}
                            style={[styles.buttonContent]}
                        >
                            <Text style={styles.title}>Stadiums</Text>
                            <Icon
                                type='font-awesome-5'
                                name='list'
                                color={icons.color}
                                size={icons.size}
                            />

                        </Pressable>
                    </View>
                    <View style={styles.rowContent}>
                        <Pressable
                            onPress={() => props.navigation.navigate('Map')}
                            style={[styles.buttonContent]}
                        >
                            <Text style={styles.title}>Mapa</Text>
                            <Icon
                                name='map'
                                color={icons.color}
                                size={icons.size}
                            />

                        </Pressable>
                        <Pressable
                            onPress={() => props.navigation.navigate('Profile')}
                            style={[styles.buttonContent]}
                        >
                            <Text style={styles.title}>Perfil</Text>
                            <Icon
                                type='font-awesome-5'
                                name='user'
                                color={icons.color}
                                size={icons.size}
                            />

                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}