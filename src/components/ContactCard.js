import React from "react";
import { Link } from "react-router-dom";
import userImg from "../image/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="rounded mb-2 flex items-center w-[400px] border-[1px] shadow-lg">
      <img className="w-[40px] m-1" src={userImg}></img>
      <Link
        to={{ pathname: `/contacts/${id}`, state: { contact: props.contact } }}
      >
        <div className="mb-3 ml-2">
          <h1 className="text-[1.4rem] font-bold italic font-mono">{name}</h1>
          <h2>{email}</h2>
        </div>
      </Link>
      <div className="block ml-auto">
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <Link to={`/contacts/edit/${id}`}>
            <i className="fa-solid fa-edit text-blue-700 m-2 text-[1.3rem]"></i>
          </Link>
        </button>
        <Link to={`/contacts/delete/${id}`}>
          <i
            className="fa-solid text-yellow-700 fa-trash-can m-2 text-[1.3rem]"
          // onClick=s{() => props.clickHandler(id)}
          ></i>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default ContactCard;
