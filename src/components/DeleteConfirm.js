import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const DeleteConfirm = (props) => {
    // const {id, name, email} = props.contact
    const location= useLocation();
    const thisId = location.pathname.slice(17);
    const {id, name, email} = props.contact.find((contact) => contact.id === thisId);
  return (
    <>
    <p className='text-center font-mono mt-20 text-[1.5rem]'>Are you sure to delete {name} from your contact list?</p>
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
