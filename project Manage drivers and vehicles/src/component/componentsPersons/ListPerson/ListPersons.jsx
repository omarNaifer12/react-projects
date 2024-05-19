import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./people.css"
function ListPersons() {
const [persons,setPersons]=useState([]);
 
useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3001/people');
          setPersons(response.data);
          console.log(persons);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
},[]) 
return (
   
    <div className="person-list">
      <h1>Manage peoples</h1>   
     <button>add</button>
      <table>
        <thead>
          <tr>
            <th>Person ID</th>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Third Name</th>
            <th>Last Name</th>
            <th>National No</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <tr key={person.PersonID}>
              <td>{person.PersonID}</td>
              <td>{person.FirstName}</td>
              <td>{person.SecondName}</td>
              <td>{person.ThirdName}</td>
              <td>{person.LastName}</td>
              <td>{person.NationalNo}</td>
              <td>{person.DateOfBirth}</td>
              <td>{person.Gender === 1 ? 'Male' : 'Female'}</td>
              <td>{person.Address}</td>
              <td>{person.Phone}</td>
              <td>{person.Email}</td>
              <td>{person.Nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
         </div>
)
}

export default ListPersons