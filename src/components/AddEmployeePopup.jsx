import React, { useState } from 'react';
import '../styles/AddEmployeePopup.css'; 
import { addEmployee } from '../api/requests'; 

function AddEmployeePopup({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    role: '',
    team: '',
    hireDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(value => !value.trim())) {
      alert('Please fill in all fields.');
      return;
    }

    if (formData.status !== 'active' && formData.status !== 'inactive') {
      alert('Status must be either "active" or "inactive".');
      return;
    }

    addEmployee(formData)
      .then(() => {
        setFormData({
          name: '',
          status: '',
          role: '',
          team: '',
          hireDate: '',
        });
        onClose(); 
      })
      .catch(error => {
        console.error('Error adding employee:', error);
        alert('Error adding employee. Please try again.');
      });
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Team:</label>
            <input
              type="text"
              name="team"
              value={formData.team}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Hire Date:</label>
            <input
              type="date"
              name="hireDate"
              value={formData.hireDate}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Add Employee</button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployeePopup;
