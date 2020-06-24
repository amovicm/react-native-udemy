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
import {setNavigator} from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

const switchNavigator=createSwitchNavigator({
  // ResolveAuth: ResolveAuthScreen,
  loginFlow:createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SignInScreen
  }),
  MainFlow: createBottomTabNavigator({
    TrackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailsScreen
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
    <AuthProvider>
      <App ref={(navigator)=>{setNavigator(navigator)}}/> 
    </AuthProvider>
  );
};
