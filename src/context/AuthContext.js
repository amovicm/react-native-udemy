import createDataContext from "./createDataContext";

const authReducer=(state,action)=>{

    switch(action.type){
        case 'ADD':
            console.log('ADDED');
            return;
        default:
            return state;
    }
};

const singUp=(dispatch)=>{
    return({email,password})=>{

    };
};

const singIn=(dispatch)=>{
    return({email,password})=>{

    };
};

const singOut=(dispatch)=>{
    return({email,password})=>{

    };
};

// export default authReducer;
export const {Provider,Context}= createDataContext(authReducer,{}, {isSignedIn:false});