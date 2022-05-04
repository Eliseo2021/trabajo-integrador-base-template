import { StyleSheet, Dimensions  } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#777777'
  },
  dataContent:{
    flex: 1, 
    alignItems:'center',
    margin: 10,
    color: '#fff',
  },
  label:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  image: { 
    height: width, 
    width: width, 
    alignSelf: 'center' 
  },
  avatar: { 
    backgroundColor: '#00abf1', 
    alignSelf: 'center', 
    borderRadius:10,
  },
  cardContainer:{ 
    padding: 0 , 
    height: 100, 
    borderRadius:20
  },
  cardPokeInfo: {
    color: '#fff',
    height: height/4
  },
  cardView: {
    padding: 10,
    margin: 10,
  }
})