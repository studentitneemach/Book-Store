import React, { useContext, useReducer, useState } from "react"
import { v4 as uuid } from 'uuid'
import { reducer, UserContext } from "../StoreData/reducer";
export const Home = () => {

    const [userData, setUserData] = useState([]);
    // const [state,dispatch] = useReducer(reducer);
    const {state , dispatch}= useContext(UserContext)

    const userdataHandler = (e) => {
        const newId = uuid();
        const names = e.target.name;
        const value = e.target.value;
        setUserData(data => ({
            ...data, [names]: value, newId 
        }))
    }


    const submitHandler = (e) => {

        e.preventDefault();
        dispatch({type: "ADD_INFO" , payload :  userData })
    }
    return (
        <div className="App" >
            <form onSubmit={submitHandler}>
                <label> Enter Your Name</label>
                <br /><br />
                <input type="text" name="name" value={userData.name || ""} onChange={(e) => userdataHandler(e)} />
                <br /><br />
                <label>Enter Your Age</label>
                <br /><br />
                <input type="number" name="age" value={userData.age || ""} onChange={(e) => userdataHandler(e)} />
                <br /><br />
                <label>Enter Your Thouhht</label>
                <br /><br />
                <textarea name="informetion" value={userData.informetion || ""} onChange={(e) => userdataHandler(e)} ></textarea>
                <br /><br />
                <button > Submit</button>

            </form>
        </div>
    )

} 
