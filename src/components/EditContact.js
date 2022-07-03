import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";


const EditContact = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const thisId = location.pathname.slice(15);
    const { id, name, email } = props.contact.find((contact) => contact.id === thisId);
    const [contact, setContact] = useState({ id, name, email })
    // console.log(thisItem);
    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }
    const update = (e) => {
        e.preventDefault();
        if (contact.name === "" || contact.email === "") {
            alert("Fill all the inputs");
            return;
        }
        // console.log(contact);
        props.updateContact(contact);
        setContact({ name: "", email: "" });
        // console.log(props+ JSON.stringify(contact));
        navigate("/");
    };
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[2rem] font-mono my-3">Editing {name}'s Profile??</h1>

            <form className="form" onSubmit={update}>
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
