import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import  Image from "../image/user.png"

const ContactDetails = (props) => {
  const location = useLocation();
  const contact = props.contacts;
  // console.table(contact[0].name);
  // console.log(location.pathname.slice(10));
  const thisId = location.pathname.slice(10);
  const item = contact.find((contact) => contact.id === thisId);
  //   console.log(item);
  return (
    <div className="grid grid-cols-3">
        <div className="grid-cols-6"></div>
      <div className="mt-4 grid-cols-6 block ms-auto">
        <img className="w-[15rem] block mx-auto" alt="userImage" src={Image}></img>
        <h1 className="text-center font-mono text-[2rem] font-bold">{item.name}</h1>
        <h2 className="text-center text-[1.5rem] font-mono">{item.email}</h2>
        <Link to="/">
          <button
            type="button"
            className="bg-blue-700 rounded px-4 py-3 font-bold text-white mt-2 mx-auto block"
            to="/"
          >
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
