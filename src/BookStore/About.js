import React, { useContext, useReducer } from "react"
import {  reducer, UserContext } from "../StoreData/reducer"


export  const About=()=>{
// const [state,dispatch] = useReducer(reducer,initialState)

const {state , dispatch}= useContext(UserContext)
console.log(state)
    return <div className="App">
        {/* {
           state.length !== 0 ?  (
            state.map( (info,idx)=> ( 
                    <div key={idx} style={{ border: "#07507d solid 1px" , boxSizing: "border-box "}}>
                   <h3> Name :- {info.name}</h3>
                   <h3>Age :- {info.age}</h3>
                   <p>Informetion :-  {info.informetion}</p>
                   <br/>
                   <button onClick={()=> dispatch({type : "REMOVE_INFO"  , payload : info.newId })}>Remove</button>
                    </div>
                ))) : "Not a Informetion" 
            } */}
    </div>
} 
