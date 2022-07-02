import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const DeleteConfirm = (props) => {
    // const {id, name, email} = props.contact
    const location= useLocation();
    const id = location.pathname.slice(17);
  return (
    <>
    <p className='text-center font-mono mt-20 text-[2rem]'>Are you sure to delete this contact?</p>
    <div className='flex items-center justify-center mt-5'>
      
      <Link to="/">
      <button className='bg-blue-700 mx-3 rounded p-3 text-white' type='button'>Cancel</button>
      </Link>
      <Link to="/">
      <button onClick={()=>props.deleteConfirm(id)} className='bg-yellow-700 rounded p-3 text-white' type='button'>Confirm Delete</button>
      </Link>
    </div>
    </>
  )
}

export default DeleteConfirm
