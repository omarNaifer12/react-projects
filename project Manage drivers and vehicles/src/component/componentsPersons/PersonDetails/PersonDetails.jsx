import React, { useContext,useEffect } from 'react'
import "./PersonDetails.css"
import { StoreContext } from '../../../context/storeContext';
import { useParams, useNavigate } from 'react-router-dom';
const PersonDetails = () => {
    const {id}=useParams();
   
  const{ getPersonById,person,setPerson}=useContext(StoreContext);
    useEffect(() => {
      const fetchPerson = async () => {
      if(id!==undefined){ 
     await getPersonById(id);
    }
    };
  
      fetchPerson();
    }, [id]);
  
    if (!person) {
      return <div>Loading...</div>;
    }
  
    return (
        <div className="person-details">
        <h1 className="person-details-label">Person Details</h1>
        <div className="person-info">
          <div className="person-image">
            <img src={person.ImagePath} alt={`${person.FirstName} ${person.LastName}`} />
          </div>
          <div className="person-text">
            <h2>{`${person.FirstName} ${person.SecondName} ${person.ThirdName} ${person.LastName}`}</h2>
            <p><strong>Person ID:</strong> {person.PersonID}</p>
            <p><strong>First Name:</strong> {person.FirstName}</p>
            <p><strong>Second Name:</strong> {person.SecondName}</p>
            <p><strong>Third Name:</strong> {person.ThirdName}</p>
            <p><strong>Last Name:</strong> {person.LastName}</p>
            <p><strong>National No:</strong> {person.NationalNo}</p>
            <p><strong>Date of Birth:</strong> {person.DateOfBirth}</p>
            <p><strong>Gender:</strong> {person.Gendor}</p>
            <p><strong>Address:</strong> {person.Address}</p>
            <p><strong>Phone:</strong> {person.Phone}</p>
            <p><strong>Email:</strong> {person.Email}</p>
            <p><strong>Nationality:</strong> {person.NationalityCountryID}</p>
          </div>
        </div>
      </div>
    );
}

export default PersonDetails