import React,{useState} from 'react';
import {View,StyleSheet} from 'react-native'
import {Input,Text, Button} from 'react-native-elements'
import Spacer from '../components/Spacer';

const AuthForm =({headerText,errorMessage,onSubmit,submitButtonText})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    return(
        <View style={styles.container}>
                <Text h3 style={styles.headerText}>{headerText}</Text>
                <Input style={styles.inputStyle} label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false}/>
                <Input style={styles.inputStyle} label="Password" value={password} onChangeText={setPassword} secureTextEntry autoCapitalize="none" autoCorrect={false}/>
             
                {errorMessage?<Text style={styles.errorMessage}>{errorMessage}</Text> : null}
                <Spacer>
                        <Button onPress={()=>onSubmit({email,password})} title={submitButtonText}/>
                </Spacer>
        </View>
    );
}

const styles= StyleSheet.create({
    headerText:{
            marginTop:150,
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
        // borderColor:'red',
        // borderWidth:3,
        flex:1,
        justifyContent:"center",
        marginBottom:'50%'   
    },
    errorMessage:{
            fontSize:20,
            color:'red',
            margin:5
    },
    textStyle:{
            color:'blue',
            fontSize:18,
            alignSelf:"center"
    }
});


export default AuthForm;