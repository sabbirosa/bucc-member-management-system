import { faUserPen, faUserXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Swal from 'sweetalert2'

function List({ members, handleEdit, handleDelete, search, setSearch }) {
//   {
//     id: 21201200,
//     name: "Sabbir",
//     email: "sabbir@bucc.org",
//     gEmail: "sabbir.bin.abdullatif@g.bracu.ac.bd",
//     phone: "01700000000",
//     bloodGroup: "A+",
//     bracuDepartment: "CS",
//     designation: "Executive",
//     department: "Human Resources",
//     contributions: 5,
//     status: "Active",
//     image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg",
// }
  const userClicked = (member) => (event) => {
    Swal.fire({
      imageUrl: `${member.image}`,
      imageHeight: 200,
      imageAlt:  `${member.name}'s Profile Picture`,
      title: member.name,
      html: `
      <div class="row">
        <div class="col-6 text-left">
          <p><b>Student ID:</b> ${member.id}</p>
          <p><b>Email:</b> ${member.email}</p>
          <p><b>G-Suite Email:</b> ${member.gEmail}</p>
          <p><b>Phone No:</b> ${member.phone}</p>
          <p><b>Blood Group:</b> ${member.bloodGroup}</p>
          <p><b>BRACU Department:</b> ${member.bracuDepartment}</p>
          <p><b>BUCC Designation:</b> ${member.designation}</p>
          <p><b>BUCC Department:</b> ${member.department}</p>
          <p><b>Contributions:</b> ${member.contributions}</p>
          <p><b>Status:</b> ${member.status}</p>
        </div>
      </div>

      `,
      showCloseButton: true,
      showConfirmButton: false,
    })
  }

  return (
    <div className='contain=table'>
      <table className='striped-table'>
                <thead>
                    <tr>
                        <th className='text-center'>SL</th>
                        <th className='text-center'>Name</th>
                        <th className='text-center'>ID</th>
                        <th className='text-center'>Email</th>
                        <th className='text-center'>Department</th>
                        <th className='text-center'>Designation</th>
                        <th className='text-center'>Status</th>
                        <th className='text-center'> Contributions</th>
                        <th colSpan={2} className="text-center">
                            Update/Delete
                        </th>
                    </tr>
        </thead>
        <tbody>
          {
            members.length > 0 ? (
                members.filter((member) => {
                  return search.toLowerCase() === '' ? member : member.name.toLowerCase().includes(search.toLowerCase())
                }, []).map((member, index) => (
                  <tr key={member.id}>
                    <td onClick={userClicked(member)} className='text-center'>{index + 1}</td>
                    <td onClick={userClicked(member)}>{member.name}</td>
                    <td onClick={userClicked(member)} className='text-center'>{member.id}</td>
                    <td onClick={userClicked(member)}>{member.email}</td>
                    <td onClick={userClicked(member)} className='text-center'>{member.department}</td>
                    <td onClick={userClicked(member)} className='text-center'>{member.designation}</td>
                    <td onClick={userClicked(member)} className='text-center'>{member.status}</td>
                    <td onClick={userClicked(member)} className='text-center'>{member.contributions}</td>
                    <td className='text-right'>
                      <button className='btn accent-button square-button' onClick={() => handleEdit(member.id)}><FontAwesomeIcon icon={faUserPen} style={{color: "#ffffff",}} /></button>
                    </td>
                    <td className='text-left'>
                      <button className='btn red-button square-button' onClick={() => handleDelete(member.id)}><FontAwesomeIcon icon={faUserXmark} style={{color: "#ffffff",}} /></button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan={9}>No members</td>
              </tr>
            )
          }
        </tbody>
        </table>
    </div>
  )
}

export default List