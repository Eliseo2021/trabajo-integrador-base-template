import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#292929",
    },
    mainContent: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: width / 4
    },
    buttonContent: {
      width: width / 3,
      height: width / 3,
      margin: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8e1537',
      //backgroundColor: 'rgba(52, 52, 52, .2)',
      borderWidth: 4,
      borderColor: 'rgba(52, 52, 52, .2)',
      color: "#fff"
    },
    rowContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff'
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      width: '100%'
    },
    title2: {
      fontSize: 35,
      fontWeight: 'bold',
      marginTop: width/4,
      color: '#fff'
    }
})