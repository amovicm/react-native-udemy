import React,{useState} from 'react';
import {View,StyleSheet} from 'react-native'
import {Input,Text, Button} from 'react-native-elements'
import Spacer from '../components/Spacer';

const SignUpScreen=({navigation})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    return(<View style={styles.container}>
                <Text h3 style={styles.headerText}> Sign Up for Tracker</Text>
    
                        <Input style={styles.inputStyle} label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false}/>
                        <Input style={styles.inputStyle} label="Password" value={password} onChangeText={setPassword} secureTextEntry autoCapitalize="none" autoCorrect={false}/>
    
             
                
                <View style={styles.buttonStyle}>
                        <Button onPress={()=>{navigation.navigate("mainFlow")}} title="Sign Up"/>
                </View>
                {/* <Button title="Go To SignIn"
                        onPress={()=>navigation.navigate("SignIn")}/>
                <Button title="Go To Main Flow"
                        onPress={()=>navigation.navigate("mainFlow")}/> */}
            </View>);

};
SignUpScreen.navigationOptions=()=>{
        return{
                headerShown:false
        };
};

const styles= StyleSheet.create({
        headerText:{
                marginVertical:25,
                alignSelf:"center"
        },
        inputStyle:{
                marginVertical:5
        },
        buttonStyle:{
                marginHorizontal:15
        },
        container:{
            borderColor:'red',
            borderWidth:3,
            flex:1,
            justifyContent:"center",
            marginBottom:'50%'   
        }
});

export default SignUpScreen;