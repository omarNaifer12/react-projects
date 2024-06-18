import React from 'react'
import ListPersons from './component/componentsPersons/ListPerson/ListPersons'
import {   Route, Routes } from 'react-router-dom';
import Add_Edit_Person from './component/componentsPersons/Add_Edit/Add_Edit_Person';
import PersonDetails from './component/componentsPersons/PersonDetails/PersonDetails';
const App = () => {
  return (
    <div>
      <Routes>
 <Route path='/' element={<ListPersons />} />     
 <Route path='/add-Person' element={<Add_Edit_Person />} />     
 <Route path='/edit-Person/:id' element={<Add_Edit_Person />} />     
 <Route path='/Person-details/:id' element={<PersonDetails />} />     
      </Routes>
   
    </div>
  )
}

export default App