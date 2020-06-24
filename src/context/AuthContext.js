import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";
import {AsyncStorage} from 'react-native';
import {navigate} from '../navigationRef'

const authReducer=(state,action)=>{

    switch(action.type){
        case 'add_error':
            return {...state,errorMessage:action.payload};
        case 'signup':
            return {errorMessage:'',token:action.payload};
        case 'signin':
            return {errorMessage:'',token:action.payload};
        case 'clear_error_message':
            return {...state,errorMessage:''};
        case 'signout':
            return {errorMessage:'',token:null};
        default:
            return state;
    }
};

const tryLocalSingin= dispatch=>async ()=>{
    const token= await AsyncStorage.getItem('token');
    if(token){
        dispatch({type:'signin', payload: token});
        navigate('TrackList');
    }
    else{
        navigate('SingUp');
    }
};

const clearErrorMessage= dispatch=>()=>{
    dispatch({type:'clear_error_message'});
}

const signup=dispatch=>{
    return async({email,password})=>{

        try{
            console.log("Pozivam servis sa podacima username:"+email+" i pass:"+password);
            const response= await trackerApi.post('/signup',{email,password});
            console.log("odgovor "+ response.data.token);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'signup', payload: response.data.token});
            navigate('TrackList');
        }
        catch(err){
            dispatch({type:'add_error',payload:'Something went wrong with singup'});
            console.log(err.response.data);
        }

    };
};

const signin=dispatch=>{
    return async({email,password})=>{
        try{
            console.log(email,password);
            const response= await trackerApi.post('/signin',{email,password});
            console.log(response.data);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'signin', payload: response.data.token});
            navigate('TrackList');
        }
        catch(err){
            dispatch({type:'add_error',payload:'Something went wrong with singin'});
            console.log(err.response.data);
        }
    };
};

const signout=dispatch=>async()=>{
    await AsyncStorage.removeItem('token');
    dispatch({type:"signout"});
    navigate('loginFlow');
};

// export default authReducer;
export const {Provider,Context}= createDataContext(authReducer,{signin, signout, signup, clearErrorMessage, tryLocalSingin}, {isSignedIn:false, errorMessage:''});