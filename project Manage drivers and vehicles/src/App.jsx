import React from 'react'
import ListPersons from './component/componentsPersons/ListPerson/ListPersons'
import {   Route, Routes } from 'react-router-dom';
import Add_Edit_Person from './component/componentsPersons/Add_Edit/Add_Edit_Person';
import PersonDetails from './component/componentsPersons/PersonDetails/PersonDetails';
import AllUsers from './component/users/AllUsers/AllUsers';
import Add_Edit_User from './component/users/Add_Edit_User/Add_Edit_User';
import LoginInfo from './component/users/Add_Edit_User/LoginInfo';
import ChangePassword from './component/users/ChangePassword/ChangePassword';
const App = () => {
  return (
    <div>
      <Routes>
 <Route path='/' element={<ListPersons />} />     
 <Route path='/add-Person' element={<Add_Edit_Person />} />     
 <Route path='/edit-Person/:id' element={<Add_Edit_Person />} />     
 <Route path='/Person-details/:id' element={<PersonDetails />} />     
 <Route path='/all-users' element={<AllUsers />} />     
 <Route path='/add-users' element={<Add_Edit_User />} />     
 <Route path='/add-users-login' element={<LoginInfo />} />     
 <Route path='/change-password/:id' element={<ChangePassword />} />     

      </Routes>
   
    </div>
  )
}

export default App