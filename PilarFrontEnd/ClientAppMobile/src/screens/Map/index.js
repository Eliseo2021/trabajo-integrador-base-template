import React, { useState } from "react";
import { View, Text, SafeAreaView, Dimensions, ActivityIndicator } from "react-native";
import { Icon, Switch, Button } from 'react-native-elements';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { hasLocationPermission } from "../../LocationPermission";

import { styles } from "./styles";

import Wrapper from '../Wrapper';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const ASPECT_RATIO = width / height;
const LATITUDE = -33.3018708;
const LONGITUDE = -66.3298548;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default (props) => {
 const coords = props.route.params.stadium.trk;
 const STADIUMLAT = Number(coords[0].lat)
 const STADIUMLNG = Number(coords[0].lng)
 console.log(STADIUMLAT, STADIUMLNG);

  const [mapRef, setMapRef] = useState(null)

  const [region, setRegion] = useState({
    latitude: STADIUMLAT , // LATITUDE, //
    longitude: STADIUMLNG, //LONGITUDE, //
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const [mapType, setMapType] = useState('standard');
  const [loader, setLoader] = useState(false);

  const _getLocation = async () => {
    const permiss = await hasLocationPermission();

    if (permiss) {

      await Geolocation.getCurrentPosition(
        async posicion => {
          const longitude = posicion.coords.longitude;
          const latitude = posicion.coords.latitude;

          mapRef.animateToRegion(
            {
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta
            },
            1000
          );

          setRegion({ longitude: longitude, latitude: latitude, longitudeDelta: region.longitudeDelta, latitudeDelta: region.latitudeDelta });
          setLoader(false);
        },
        (error) => {
          setLoader(false);
          console.log(error.code, error.message);
        },
        {
          accuracy: {
            android: 'high',
            ios: 'best',
          },
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 0,
          forceRequestLocation: true,
        }
      )

    } else{
      setLoader(false);
    }
  }

  const fitCoordinates = () => {
    setLoader(true);
    _getLocation();
  }

    const changeMapType = () => {
      if (mapType === 'standard') {
          setMapType('satellite')
      } else {
          setMapType('standard')
      }
  }

  const onRegionChange = region => {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = region;
    setRegion({ longitude: longitude, latitude: latitude, longitudeDelta: longitudeDelta, latitudeDelta: latitudeDelta });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Wrapper title="Mapa" navigate={props.navigation}>

        <View style={styles.mainContent}>

        <View style={styles.mapButtonView} >
                <Button
                    title="Mapa Standar"
                    onPress={() => changeMapType()}
                    buttonStyle={styles.mapButtonStandard}
                />

                <Button
                    title="Mapa Satelital"
                    buttonStyle={styles.mapButtonSatellite}
                    onPress={() => changeMapType()}
                />
                <Button
                    title="Guardar Posición"
                    buttonStyle={styles.mapButtonSaveLocation}
                    //onPress={() => saveLocation()}
                />
            </View>
            
          <View>

            <MapView
              ref={map => {
                setMapRef(map);
              }}
              mapType={mapType}
              style={styles.map}
              initialRegion={region}
              region={region}
              onRegionChangeComplete={onRegionChange}
            />
          </View>

          <View style={styles.panel}>

            <View style={ [{ flex: 1 }, styles.panelLabels]}>
              <Text> coordenadas del stadium: </Text> 
              <Text>Lat: {region.latitude} </Text>
              <Text>Lon: {region.longitude} </Text>
            </View>

            <View style={ [{ flex: 1 }, styles.panelIcons]}>

              <View style={{ flex: 1 }}>
                <Icon
                  name="crosshairs"
                  type="font-awesome"
                  color='#8e1537'
                  size={width / 10}
                  onPress={() => fitCoordinates()}
                />
              </View>

            </View>

          </View>

          <View style={styles.markerFixed}>

            {!loader ?

              <Icon
                name="map-marker"
                type="font-awesome"
                color='#8e1537'
                size={width / 6}
              />              
            :
              <ActivityIndicator size="large" color="#8e1537" />
            }
          </View>

        </View>

      </Wrapper>
    </SafeAreaView>
  )
}

