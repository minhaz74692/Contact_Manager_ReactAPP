import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";


const ContactList = (props) => {
  // console.log(props.contacts);
  const deleteContact = (id) => {
    props.getContactId(id);
  };
  const inputEl = useRef("");
  const getSearchTerm=()=>{
    props.searchKeyword(inputEl.current.value);
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
      <div className="w-[380px] input-group relative flex flex-wrap items-stretch w-full mb-4 rounded border border-solid border-gray-300 focus:border-blue-600 ">
      <input ref={inputEl} type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 rounded focus:border-blue-600 focus:outline-none" placeholder="Search" value={props.term} onChange={getSearchTerm}/>
      <span className="mr-4 flex items-center px-3 py-1.5">
      <i className="absolute fa-solid mr-3 fa-search text-[1.3rem]"></i>
      </span>
    </div>
      <div className="">{contactList.length>0?contactList: "No Contacts Available"}</div>
    </div>
  );
};

export default ContactList;
