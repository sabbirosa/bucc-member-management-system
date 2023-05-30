import React from 'react';
import logo from '../BUCC-logo.svg';
import { membersData } from '../data/members';
const allMembers = membersData

function Header({members, setMembers, search, setSearch}) {

  const filterList = (e) => {
    const value = e.target.value
    const filteredMembers = members.filter(member => {
      if (value === 'All') {
        return member
      } else {
        return member.status === value || member.department === value || member.designation === value
      }
    }
    )
    setMembers(filteredMembers)
  }

  const resetFiltered = () => {
    setMembers(allMembers)
  }

  return (
    <header className='text-center'>
      <img className='logo' src={logo} alt="BUCC Logo" />
      <h1 className='text-center'>BUCC Member Management System</h1>
      <table className='table filter-table'>
        <tr>
          <td className='search-field'>
            <input className='square-button' type="text" placeholder='Search by name' onChange={(e) => setSearch(e.target.value)} />
          </td>
          <td className='status-btn'>
            <select className='btn square-button' onChange={filterList}>
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </td>
          <td className='department-btn'>
            <select className='btn square-button' onChange={filterList}>
              <option value="All">All Departments</option>
              <option value="Panel Member">Panel Member</option>
              <option value="Communication & Marketing">Communication & Marketing</option>
              <option value="Creative">Creative</option>
              <option value="Event Management">Event Management</option>
              <option value="Finance">Finance</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Press Release & Publications">Press Release & Publications</option>
            </select>
          </td>
          <td className='designation-btn'>
            <select className='btn square-button' onChange={filterList}>
              <option value="All">All Designations</option>
              <option value="Governing Body">Governing Body</option>
              <option value="Executive Body">Executive Body</option>
              <option value="Senior Executive">Senior Executive</option>
              <option value="Executive">Executive</option>
              <option value="General Member">General Member</option>
            </select>
          </td>
          <td className='reset-btn'>
            <button className='btn square-button muted-button' onClick={resetFiltered}>Reset Filter
            </button>
          </td>
      
        </tr>
      </table>
      
    </header>
  )
}

export default Header