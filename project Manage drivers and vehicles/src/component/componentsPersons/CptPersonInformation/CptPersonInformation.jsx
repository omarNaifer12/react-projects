import React, { useContext,useEffect } from 'react'

import "./CptPersonInformation.css"
import { StoreContext } from '../../../context/storeContext';
const CptPersonInformation = ({id}) => {
    const{ getPersonById,person,setPerson}=useContext(StoreContext);
    useEffect(() => {
      const fetchPerson = async () => {
      if(id!==undefined){ 
    const respnse= await getPersonById(id);
    }
    };
      fetchPerson();
    }, [id]);
  return (
    <div className="person-info">
    <h1 className="lbl-person-info">Person Information</h1>
    <br />
    <div className="person-image">
      <img
        src={person ? person.ImagePath : 'placeholder.jpg'}
        alt={`${person ? `${person.FirstName} ${person.LastName}` : '????'}`}
      />
    </div>
    <div className="person-text">
      <h2>{person ? `${person.FirstName} ${person.SecondName} ${person.ThirdName} ${person.LastName}` : '????'}</h2>
      <p><strong>Person ID:</strong> {person ? person.PersonID : '????'}</p>
      <p><strong>First Name:</strong> {person ? person.FirstName : '????'}</p>
      <p><strong>Second Name:</strong> {person ? person.SecondName : '????'}</p>
      <p><strong>Third Name:</strong> {person ? person.ThirdName : '????'}</p>
      <p><strong>Last Name:</strong> {person ? person.LastName : '????'}</p>
      <p><strong>National No:</strong> {person ? person.NationalNo : '????'}</p>
      <p><strong>Date of Birth:</strong> {person ? person.DateOfBirth : '????'}</p>
      <p><strong>Gender:</strong> {person ? person.Gendor : '????'}</p>
      <p><strong>Address:</strong> {person ? person.Address : '????'}</p>
      <p><strong>Phone:</strong> {person ? person.Phone : '????'}</p>
      <p><strong>Email:</strong> {person ? person.Email : '????'}</p>
      <p><strong>Nationality:</strong> {person ? person.NationalityCountryID : '????'}</p>
    </div>
  </div>
  )
}

export default CptPersonInformation