import React from 'react'

function AddButton({setIsAdding}) {
  return (
    <div className='text-right'>
        <button className='btn square-button' onClick={() => setIsAdding(true)}>Add Member
        </button>
        <br />
    </div>
  )
}

export default AddButton