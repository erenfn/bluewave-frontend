import React, { useEffect, useState } from 'react';
import '../styles/Table.css'; 
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { getEmployees } from '../api/requests'; 

function Table({refreshTable}) {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    getEmployees(setEmployeesData);
  }, [refreshTable]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              Status <ArrowDownwardOutlinedIcon/>
            </div>
          </th>
          <th>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              Role <HelpOutlineOutlinedIcon/>
            </div>
          </th>
          <th>Team</th>
          <th>Hire Date</th>
        </tr>
      </thead>
      <tbody>
        {employeesData.map(employee => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>
              <div className='status-cell'>{employee.status}</div>
            </td>
            <td>{employee.role}</td>
            <td>{employee.team}</td>
            <td>
              <div className='hire-date-cell'>{employee.hireDate}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
