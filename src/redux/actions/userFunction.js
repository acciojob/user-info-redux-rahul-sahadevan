import { NAME,EMAIL } from "./userAction";


export const name = (value)=>{
    return {
        type:NAME,
        value:value
    }
}

export const email = (value)=>{
    return {
        type:EMAIL,
        value:value
    }
}