import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignUpScreen from './src/screens/SingUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';

const switchNavigator=createSwitchNavigator({
  loginFlow:createStackNavigator({
    Signup: SignUpScreen,
    SignIn: SignInScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      trackList: TrackListScreen,
      trackDetail: TrackDetailsScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});


// export default createAppContainer(switchNavigator);

const App=createAppContainer(switchNavigator);
// const store= configureStore;
export default ()=>{
  return(
    // <AuthProvider>
      <App/> 
    // </AuthProvider>
  );
};
