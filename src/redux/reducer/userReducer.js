import { NAME,EMAIL } from "../actions/userAction";

const initial = {
    name:'',
    email:''
};

const userReducer = (state=initial,action)=>{
    
    switch(action.type){
        case NAME: return {...state,name:action.value}
        case EMAIL: return {...state,email:action.value}
        default: return state
    }
}

export default userReducer