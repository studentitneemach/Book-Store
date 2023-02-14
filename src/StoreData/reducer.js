import React , { createContext, useReducer } from "react";

export const initialState = [] ;

  const  reducer=(initialState,action)=>{
    console.log(initialState)
   if(action.type === "ADD_INFO"){
        alert('Your Informetions is Added')  
        return  {
            
            ...initialState,
            initialState : initialState.push(action.payload),
        
            }}
if(action.type === "REMOVE_INFO" ) {   return   initialState.filter((info)=> info.newId  !==  action.payload )}
         
    
}

export const  UserContext =  createContext(reducer)

export const ContextProvider=({children})=>{

  const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <UserContext.Provider value={{state,dispatch}}>{children}</UserContext.Provider>
    )
}
