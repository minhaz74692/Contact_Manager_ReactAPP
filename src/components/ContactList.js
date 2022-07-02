import React from "react";
import ContactCard from "./ContactCard";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ContactList = (props) => {
  // console.log(props.contacts);

  const deleteContact = (id) => {
    props.getContactId(id);
  };

  const navigate = useNavigate();
  const location = useLocation()
  const navigateRoute=()=>{
    console.log(location.pathname);
    navigate("/add")
  }
  const contactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        clickHandler={deleteContact}
      />
    );
  });
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex items-center w-[380px] justify-between mb-3">
        <h2 className="text-[1.5rem]">Contact List</h2>
        <Link to="/add">
          <button
            type="button"
            className="bg-blue-700 rounded px-4 py-3 font-bold text-white"
            to="/add"
          >
            Add Contact
          </button>
        </Link>
      </div>
      <div className="">{contactList}</div>
    </div>
  );
};

export default ContactList;
