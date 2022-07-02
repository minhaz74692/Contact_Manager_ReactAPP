import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";


const EditContact = (props) => {
    const navigate= useNavigate();
    const location = useLocation();
    const thisId = location.pathname.slice(15);
    const thisItem = props.contact.find((contact) => contact.id === thisId);
    const [contact, setContact] = useState({ name: `${thisItem.name}`, email: `${thisItem.email}` });
    // console.log(thisItem);
    const handleChange = (e) => {
        setContact({...contact, [e.target.name]:e.target.value})
    }
    const submitEdit=(e)=>{
        e.preventDefault();
        if (contact.name === "" || contact.email === "") {
            alert("Field's should not blank!!");
            return;
          };
          thisItem.name = thisItem.name.replace(thisItem.name, contact.name);
          thisItem.email = thisItem.email.replace(thisItem.email, contact.email);
        //   console.log(thisItem.name, thisItem);
        navigate("/");
        const localContact = JSON.parse(localStorage.contacts);
        const thisLocalItem = localContact.find((con)=> con.id === thisId);
        thisLocalItem.name = thisLocalItem.name.replace(thisLocalItem.name, contact.name)
        console.log(thisLocalItem);
        thisLocalItem.email = thisLocalItem.email.replace(thisLocalItem.email, contact.email)
        console.log(thisLocalItem);

    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[2rem] font-mono my-3">Editing {thisItem.name}'s Profile??</h1>

            <form className="form" onSubmit={submitEdit}>
                <div className="pb-5">
                    <label className="text-[1.4rem]">Name: </label>
                    <br />
                    <input className="mt-1 border-[1px] rounded p-1 w-[360px]" type="name" placeholder="Full Name" id="name" name="name" value={contact.name} onChange={handleChange} />
                </div>
                <div>
                    <label className="text-[1.4rem]">Email: </label>
                    <br />
                    <input className="mt-1 border-[1px] rounded p-1 w-[360px]" type="email" placeholder="example@gmail.com" id="email" name="email" value={contact.email} onChange={handleChange} />
                </div>
                <Link to="/">
                <button type="button" className="button bg-green-700 rounded px-4 py-1 my-2 text-white text-[1.2rem] border-[2px] border-white hover:bg-green-800 hover:border-slate-400">Cancel</button>
                </Link>
                <button type="submit" className="button bg-indigo-500 rounded px-4 py-1 my-2 text-white text-[1.2rem] border-[2px] border-white hover:bg-indigo-700 hover:border-slate-400">Confirm Edit</button>
            </form>
        </div>
    );
};

export default EditContact;
