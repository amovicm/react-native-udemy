import React, { useContext } from 'react';
import {View,StyleSheet,Text} from 'react-native'
import {Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext';
import {SafeAreView} from 'react-navigation'

const AccountScreen=()=>{
    const {signout}= useContext(AuthContext);   
    return(
    <SafeAreView forceInset={{top:'always'}}>        
        <Text style={{fontSize:48}}>AcountScreen</Text>
        <Spacer><Button title="Sing Out" onPress={signout}/></Spacer>
    </SafeAreView>
    );
}

const styles= StyleSheet.create({
    
});

export default AccountScreen;