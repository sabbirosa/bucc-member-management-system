import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function Edit({ members, currentMember, setMembers, setIsEditing}) {
  const [name, setName] = useState(currentMember.name);
  const [id, setID] = useState(currentMember.id);
  const [gEmail, setGEmail] = useState(currentMember.gEmail);
  const [email, setEmail] = useState(currentMember.email);
  const [phone, setPhone] = useState(currentMember.phone);
  const [bracuDepartment, setBracuDepartment] = useState(currentMember.bracuDepartment);
  const [bloodGroup, setBloodGroup] = useState(currentMember.bloodGroup);
  const [department, setDepartment] = useState(currentMember.department);
  const [designation, setDesignation] = useState(currentMember.designation);
  const [status, setStatus] = useState(currentMember.status);
  const [image, setImage] = useState(currentMember.image);
  const [contributions, setContributions] = useState(currentMember.contributions);

  const textInput = React.useRef(null)

  useEffect(() => {
    textInput.current.focus();
  }, [])

  const handleEdit = (e) => {
    e.preventDefault();

    if (!name || !id || !email || !department || !designation || !status || !contributions || !bloodGroup || !bracuDepartment || !gEmail || !phone){
      return Swal.fire({
        icon: 'error',
        title: 'Opps!',
        text: 'One or more field are empty! Please fill all the fields.',
        showConfirmButton: true
      });
    }

    const member = {
      id,
      name,
      email,
      department,
      designation,
      status,
      bloodGroup,
      bracuDepartment,
      gEmail,
      phone,
      contributions,
      image: image || 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg',
      
    }

    for (let i = 0; i < members.length; i++) {
      if (members[i].id === currentMember.id) {
        members[i] = member;
        break;
      }
    }
    
    setMembers([...members]);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: `New member ${name}'s information updated successfully!`,
      showConfirmButton: false
    });
  }

  return (
    <div className="small-container">
    <form onSubmit={handleEdit}>
        <h1 className='text-center'>Edit Member's Details</h1>
        <label htmlFor="name">Full Name
                </label>
                <input
                    className='btn '
                    id="name"
                    type="text"
                    ref={textInput}
                    name="name"
                    value={name}
                    placeholder='Enter Your Full Name'
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="id">Student ID
                </label>
                <input
                    className='btn '
                    id="id"
                    type="number"
                    name="id"
                    value={id}
                    placeholder='Enter BRACU ID'
                    onChange={e => setID(e.target.value)}
                />
                <label htmlFor="email">Email
                </label>
                <input
                    className='btn '
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    placeholder='Enter Your Email'
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="g-email">G-suit Email
                </label>
                <input
                    className='btn '
                    id="g-email"
                    type="email"
                    name="g-email"
                    value={gEmail}
                    placeholder='Enter Your G-suit Email'
                    onChange={e => setGEmail(e.target.value)}
                />
                <label htmlFor="phone">Phone No
                </label>
                <input
                    className='btn '
                    id="phone"
                    type="text"
                    name="phone"
                    value={phone}
                    placeholder='Enter Your Phone No'
                    onChange={e => setPhone(e.target.value)}
                />

                <label htmlFor="bracu-department">Department
                </label>
                <select
                  className='btn'
                  value={bracuDepartment}
                  onChange={e => setBracuDepartment(e.target.value)}
                  placeholder='Select BUCC Department'
                  >
                  <option value="" disabled selected hidden>Select BRACU Department</option>
                  <option value="CSE">CSE</option>
                  <option value="CS">CS</option>
                  <option value="EEE">EEE</option>
                  <option value="BBA">BBA</option>
                  <option value="MNS">MNS</option>
                  <option value="Economics">Economics</option>
                  <option value="English">English</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="LLB">LLB</option>
                </select>
                
                <label htmlFor="blood-group">Blood Group
                </label>
                <select
                className='btn'
                value={bloodGroup}
                onChange={e => setBloodGroup(e.target.value)}
                placeholder='Select Blood Group'
                >
                    <option value='' disabled selected hidden>Select Blood Group</option>
                    <option value='A+'>A+</option>
                    <option value='A-'>A-</option>
                    <option value='B+'>B+</option>
                    <option value='B-'>B-</option>
                    <option value='AB+'>AB+</option>
                    <option value='AB-'>AB-</option>
                    <option value='O+'>O+</option>
                    <option value='O-'>O-</option>

                </select>

                <label htmlFor="department">BUCC Department
                </label>
                <select
                  className='btn '
                  value={department}
                  onChange={e => setDepartment(e.target.value)}
                  placeholder='Select BUCC Department'
                >
                  <option value="" disabled selected hidden>Select BUCC Department</option>
                  <option value="Panel Member">Panel Member</option>
                  <option value="Communication & Marketing">Communication & Marketing</option>
                  <option value="Creative">Creative</option>
                  <option value="Event Management" defaultChecked>Event Management</option>
                  <option value="Finance">Finance</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Press Release & Publications">Press Release & Publications</option>
                </select>
                <label
                htmlFor="designation">BUCC Designation
                </label>
                <select className='btn ' value={designation} onChange={e => setDesignation(e.target.value)}>
                  <option value="" disabled selected hidden>Select BUCC Designation</option>
                  <option value="Governing Body">Governing Body</option>
                  <option value="Executive Body">Executive Body</option>
                  <option value="Senior Executive">Senior Executive</option>
                  <option value="Executive">Executive</option>
                  <option value="General Member">General Member</option>
                </select>
                <label
                htmlFor="status">Activity Status
                </label>
                <select className='btn ' value={status} onChange={e => setStatus(e.target.value)}>
                  <option value="" disabled selected hidden>Select Member's Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <label htmlFor="contributions">contributions
                </label>
                <input 
                    className='btn '
                    id="contributions"
                    type="number"
                    name="contributions"
                    value={contributions}
                    onChange={e => setContributions(e.target.value)}
                />

                <label htmlFor="image">Member's Image URL
                </label>
                <input
                    className='btn'
                    id="image"
                    type="URL"
                    name="g-email"
                    value={image}
                    placeholder='https://example.com/user/image.jpg'
                    onChange={e => setImage(e.target.value)}
                />
        <div style={{ marginTop: '30px' }}>
            <input
                className="square-button"
                type="submit"
                value="Edit Details" />
            <input
                style={{ marginLeft: '12px' }}
                className="muted-button square-button"
                type="button"
                value="Cancel"
                onClick={() => setIsEditing(false)}
            />
        </div>
    </form> 
</div>
  )
}

export default Edit