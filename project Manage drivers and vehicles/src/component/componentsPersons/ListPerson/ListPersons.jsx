import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./people.css"
import { useNavigate } from 'react-router-dom';
function ListPersons() {
const [persons,setPersons]=useState([]);
 const navigate=useNavigate();
useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/people');
          console.log('API response:',response.data);
          setPersons(response.data);
         console.log("data",persons);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
},[]) 
const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this person?")) {
    await deletePerson(id);
  }
};

return (
  <div className="person-list">
    <h1>Manage People</h1>
    <button className="add-button" onClick={() => navigate("/add-Person")}>Add Person</button>
    <table className="person-table">
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
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {persons.map((person, index) => (
          
          
          <tr key={index}>
            <td>{person.PersonID}</td>
            <td>{person.FirstName}</td>
            <td>{person.SecondName}</td>
            <td>{person.ThirdName}</td>
            <td>{person.LastName}</td>
            <td>{person.NationalNo}</td>
            <td>{person.DateOfBirth}</td>
            <td>{person.Gendor}</td>
            <td>{person.Address}</td>
            <td>{person.Phone}</td>
            <td>{person.Email}</td>
            <td>{person.NationalityCountryID}</td>
            <td><img src={person.ImagePath} alt={`${person.FirstName} ${person.LastName}`} className="person-image" /></td>
            <td>
              <p>{console.log("id",person.id)}</p>
              <button className="edit-button" onClick={() => navigate(`/edit-Person/${person.id}`)}>Edit</button>
              <button className="delete-button" >Delete</button>
              <button className="delete-button"  onClick={()=>navigate(`/Person-details/${person.id}`)}>Show Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default ListPersons;