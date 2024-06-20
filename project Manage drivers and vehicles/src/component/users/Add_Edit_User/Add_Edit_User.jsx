import React,{useContext, useState} from 'react'
import { useNavigate, Outlet } from 'react-router-dom';
import CptSearchForPerson from '../../componentsPersons/CptSearchForPerson/CptSearchForPerson';
import LoginInfo from './LoginInfo';
import { StoreContext } from '../../../context/storeContext';
const Add_Edit_User = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('personal-info');
    const {person}=useContext(StoreContext);
    const handleTabChange = (tab) => {
      setActiveTab(tab);
     
    };  
    return(
    
    <div>
        <h1>Add/Edit User</h1>
        <div>  
          <button onClick={() => handleTabChange('personal-info')}>Personal Info</button>
          <button onClick={() => handleTabChange('login-info')}>Login Info</button>
        </div>
        {activeTab === 'personal-info' && <CptSearchForPerson />}
        { <LoginInfo />}
        
      </div>
     
    );
}

export default Add_Edit_User