import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { membersData } from '../data/members';
import Add from './Add';
import AddButton from './AddButton';
import Edit from './Edit';
import Header from './Header';
import List from './List';

function Dashboard() {
    const [members, setMembers] = useState(membersData);
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [currentMember, setCurrentMember] = useState(null);
    const [search, setSearch] = useState('');
    
    const handleEdit = (id) => {
        const [member] = members.filter(member => member.id === id);

        setCurrentMember(member);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [member] = members.filter(member => member.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${member.name} has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setMembers(members.filter(member => member.id !== id));
            }
        });
    };

  return (
    <div className='container'>
        {
            !isEditing && !isAdding && (
                <>
                    <Header
                        members={members}
                        setMembers={setMembers}
                        search={search}
                        setSearch={setSearch}
                    />
                    
                    <List 
                        members={members}
                        handleEdit = {handleEdit}
                        handleDelete = {handleDelete}
                        search={search}
                        setSearch={setSearch}
                    />
                    <AddButton
                        setIsAdding={setIsAdding}
                    />
                </>
            )
        }

        {
            isEditing && (
                <Edit
                    members={members}
                    currentMember={currentMember}
                    setMembers={setMembers}
                    setIsEditing={setIsEditing}
                />
            )
        }

        {
            isAdding && (
                <Add
                    members={members}        
                    setMembers={setMembers}
                    setIsAdding={setIsAdding}
                    
                />
            )
        }

    </div>
  )
}

export default Dashboard