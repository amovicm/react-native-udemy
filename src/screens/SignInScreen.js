import React,{useContext} from 'react';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';

const SignInScreen=({navigation})=>{
    const {state,signin,clearErrorMessage}= useContext(AuthContext);
    return(
        <>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}
            // onDidFocus={}
            // onWillBlur={}
            // onDidBlur={}
        />
        <AuthForm 
                headerText="Sign In to your account" 
                errorMessage={state.errorMessage} 
                submitButtonText="Sign In" 
                onSubmit={signin}
        />
        <NavLink
                text="Don't have account? Sign Up instead!"      
                routeName="SignUp"  
        />
        </>
    );
}

SignInScreen.navigationOptions=()=>{
    return{
            headerShown:false
    };
};

export default SignInScreen;