import React from 'react'
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
export const StoreContext=createContext(null);
const StoreContextProvider=({children})=>{
    const[person,setPerson] =useState({
       
        FirstName: '',
        SecondName: '',
        ThirdName: '',
        LastName: '',
        NationalNo: '',
        DateOfBirth: '',
        Gendor: '',
        Address: '',
        Phone: '',
        Email: '',
        NationalityCountryID: '',
        ImagePath: '',
      })
const getPersonById=async(id)=>{
        try{
          const response = await axios.get(`http://localhost:3000/people/${id}`);
          setPerson(response.data);
          return true;
        }catch(error){
          console.log('Error fetching person:',error);
         return false;
        }
      };
     
    
    const contextValue={
    getPersonById,
    person,
    setPerson,
    }
    return(
    <StoreContext.Provider value={contextValue}>
    {children}
    </StoreContext.Provider>
    )
}

export default StoreContextProvider