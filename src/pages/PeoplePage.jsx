import React, { useState } from 'react';
import '../styles/PeoplePage.css'; 
import { Divider, Pagination } from '@mui/material';
import Table from '../components/Table';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import AddEmployeePopup from '../components/AddEmployeePopup'; 

function PeoplePage() {
  const [activeButton, setActiveButton] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [refreshTable, setRefreshTable] = useState(false); 

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleEmployeeAdded = () => {
    setRefreshTable(!refreshTable);
  };

  return (
    <div className="all">
      <div className="top">
        <h1>People</h1>
        <button className="add-employee-button" onClick={togglePopup}>
          Add new Employee
        </button>
      </div>
      {showPopup && <AddEmployeePopup onClose={togglePopup} onEmployeeAdded={handleEmployeeAdded} />} {/* Pass the function to handle employee added */}
      <div className="page">
        <div className="header">
          <div className="buttons">
            <div className="buttons">
              <button
                className={`menu-button ${
                  activeButton === 1 ? 'active' : ''
                }`}
                onClick={() => handleButtonClick(1)}
              >
                Directory
              </button>
              <button
                className={`menu-button ${
                  activeButton === 0 ? 'active' : ''
                }`}
                onClick={() => handleButtonClick(0)}
              >
                My Team
              </button>
            </div>
          </div>
        </div>
        <Divider />
        <div className="content">
          <div className="table-header">
            <h2>People in my team</h2>
            <button className="customize-button">
              <TuneOutlinedIcon /> Customize
            </button>
          </div>
          <Table key={refreshTable} /> 
          <div className="pagination">
            <Pagination count={10} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeoplePage;
