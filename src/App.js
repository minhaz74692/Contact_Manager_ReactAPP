import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ContactDetails from "./components/ContactDetails";
import DeleteConfirm from "./components/DeleteConfirm";
import EditContact from "./components/EditContact";

function App(props) {
  const LOCAL_STORAGE_KEY = "contacts";
  // const [contacts, setContact] = useState([]);
  const [contacts, setContact] = useState(() => {
    const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return retrieveContact;
  }, []);
  const id = contacts.id;
  const addContactHandle = (contact) => {
    setContact([...contacts, { id: uuidv4(), ...contact }]);
    // console.log({id:uuidv4(), ...contact});
  };

  // useEffect(() => {
  //   const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retrieveContact) setContact(retrieveContact);
  // },[]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  //Delete Button Funtionality
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContact(newContactList);
  };

  return (
    <div>
      <Router>
        <Link to="/">
          <Header />
        </Link>
        <Routes>
          <Route exact path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route exact path="/add" element={<AddContact addContactHandle={addContactHandle} />} />
          <Route exact path={`/contacts/:id`} element={<ContactDetails contacts={contacts} />} />
          <Route exact path={`/contacts/delete/:id`} element={<DeleteConfirm deleteConfirm={removeContactHandler} contact={contacts} />} />
          <Route exact path={`/contacts/edit/:id`} element={<EditContact contact={contacts}/>} />
        </Routes>
      </Router>
      {/* <AddContact addContactHandle={addContactHandle} />
      <ContactList contacts={contacts} getContactId ={removeContactHandler}/> */}
    </div>
  );
}

export default App;
