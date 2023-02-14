// import { configureStore } from "@reduxjs/toolkit"
import { createStore } from "redux"

const reducer = (state=[],action)=>{
  
    switch(action.type){

        case "ADD" : {
        return [ ...state , action.payload]
        }

        case "REMOVE" : {
            alert("Remove")
        }

        default :{ 
            return state
        }
    }

}




export   const store = createStore(reducer)
