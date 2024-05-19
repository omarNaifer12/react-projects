import React from 'react'
import "./Add_Edit_Person.css"
const Add_Edit_Person = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
   e
  };

  return (
    <div className="form-container">
      <h1>Add New Person</h1>
      <form onSubmit={handleSubmit} className="person-form">
        <div className="form-group">
          <label htmlFor="personId">Person ID</label>
          <input type="text" id="personId" name="personId" required />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="secondName">Second Name</label>
          <input type="text" id="secondName" name="secondName" required />
        </div>
        <div className="form-group">
          <label htmlFor="thirdName">Third Name</label>
          <input type="text" id="thirdName" name="thirdName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="nationalNo">National No</label>
          <input type="text" id="nationalNo" name="nationalNo" required />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" required />
        </div>
        <div className="form-group">
          <label htmlFor="countryImage">Country Image</label>
          <input type="file" id="countryImage" name="countryImage" />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Add_Edit_Person