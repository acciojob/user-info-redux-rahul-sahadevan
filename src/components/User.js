import React,{useState} from "react";
import { name,email } from "../redux/actions/userFunction";
import { useDispatch,useSelector } from "react-redux";


function User(){

    const user = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(user)

    function handleUser(input){
        dispatch(name(input))
    }
    function handleEmail(e){
        dispatch(email(e))
    }
    return (
        <div>
            <h1>User Information</h1>
            <label >Name:</label>
            <input onChange={(e)=> handleUser(e.target.value)} id="name" type="text" placeholder="Name" ></input>
            <br></br>
            <br></br>
            <label >Email:</label>
            <input id="email" type="email" placeholder="Email" onChange={(e)=> handleEmail(e.target.value)} ></input>
            <p className="output">Current values in store:</p>
            <p>Name-{user.user.name}</p>
            <p>Emial-{user.user.email}</p>
        </div>
    )
}
export default User