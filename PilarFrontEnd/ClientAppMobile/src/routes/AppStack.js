import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Tabs } from './Tabs';
import List from '../screens/List';
import ListDetails from '../screens/List/ListDetails';
import MySwipeListView from '../screens/List/MySwipeListView';
import NewStadium from '../screens/List/NewStadium';
import Profile from '../screens/Profile';
import Map from '../screens/Map';
import SignIn from '../screens/Auth/SignIn';
import Register from '../screens/Auth/Register';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default AppStack = (props) => {

  const user = useSelector(state => state.user.user);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      
      {
        user ?
          <Stack.Screen name="AppStack" component={Tabs} />
        :
          <Stack.Screen name="SignIn" component={SignIn} />
      }
      <Stack.Screen name="Register" component={Register} />      
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="ListDetails" component={ListDetails} />
      <Stack.Screen name="MySwipeListView" component={MySwipeListView} />
      <Stack.Screen name="NewStadium" component={NewStadium} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
}