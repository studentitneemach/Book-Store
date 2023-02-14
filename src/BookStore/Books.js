import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

export const Books = () => {
const state = useSelector(state => state )
const [userData , setUserData]= useState([])
const dispatch = useDispatch();
const id = 
console.log(state)


const changeHandler=(e)=>{
    const names  = e.target.name;
    const values  = e.target.value;
    setUserData((data)=>({
...data , [names] : values ,
    }
    ))
}


    const submitHandler=(e)=>{
      
        e.preventDefault();
        console.log(userData)
        dispatch({type : "ADD" , payload : userData })
     
    }

    return (
        <div className="" style={{ marginTop: "5rem", paddingLeft: "10rem", fontSize: "20px",}}>
            <form onSubmit={submitHandler}>

                <label>RollNo.</label><br />
                <input type="number" style={{ width: "250px", height: "50px", fontSize: "20px", border: "1px solid  #20ffde"}} name="rollNo" value={userData.rollNo || ""}  onChange={(e)=>changeHandler(e)} /><br />
                <label>Name</label><br />
                <input type="text" style={{ width: "250px", height: "50px", fontSize: "20px", border: "1px solid  #20ffde"}} name="name" value={userData.name || ""} onChange={(e)=>changeHandler(e)} /><br />
                <label>Surname</label><br />
                <input type="text" style={{ width: "250px", height: "50px", fontSize: "20px",border: "1px solid  #20ffde" }} name="surname" value={userData.surname || ""}  onChange={(e)=>changeHandler(e)} /><br />
                <button   >Submit</button>

            </form>

        </div>
    )
} 