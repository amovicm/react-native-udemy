import React,{useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignUpScreen=({navigation})=>{
    const {state,signup,clearErrorMessage}= useContext(AuthContext);
    
    return(
        <>
         <NavigationEvents 
            onWillFocus={clearErrorMessage}
            // onDidFocus={}
            // onWillBlur={}
            // onDidBlur={}
        />
        <AuthForm 
                headerText="SignUp Screen" 
                errorMessage={state.errorMessage} 
                submitButtonText="Sign Up" 
                onSubmit={signup}
        />
        <NavLink
                text="Already have account? Sign In instead!"      
                routeName="SignIn"  
        />
        </>
    );

};
SignUpScreen.navigationOptions=()=>{
        return{
                headerShown:false
        };
};


export default SignUpScreen;