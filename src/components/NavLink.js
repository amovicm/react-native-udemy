import React from 'react';
import {StyleSheet,TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {withNavigation} from 'react-navigation';

const NavLink=({navigation,text,routeName})=>{
    return(
        <TouchableOpacity onPress={()=> navigation.navigate(routeName)}>
             <Spacer><Text style={styles.textStyle}>{text}</Text></Spacer>
        </TouchableOpacity>
    );
};

const styles= StyleSheet.create({
    textStyle:{
            color:'blue',
            fontSize:18,
            alignSelf:"center"
    }
});


export default withNavigation(NavLink);