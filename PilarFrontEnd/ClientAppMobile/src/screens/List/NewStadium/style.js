import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex:1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    width: '100%',
    height: '100%'
  },
  loginContainer: {
    flex:1,
    margin:0,
    borderRadius: 30
  },
  cardContainer: {
   flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: width/3
  },
  loginCard: {
    height: height/2
  },
  title: {
    fontSize: 40, 
    fontWeight: 'bold', 
    color: '#eee'
  },
  title2: {
    padding:20,
    fontWeight: 'bold',
    fontSize: 20,
  },
 email: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20, 
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    paddingRight: 12,
  },
 errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 20,
    marginLeft: 20
  }
})