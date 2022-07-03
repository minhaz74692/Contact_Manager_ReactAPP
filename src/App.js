import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
import api from "./api/contacts";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ContactDetails from "./components/ContactDetails";
import DeleteConfirm from "./components/DeleteConfirm";
import EditContact from "./components/EditContact";

function App(props) {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContact] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  //retrive contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }
  //data retrieve from json.server
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) return setContact(allContacts);
    };
    getAllContacts();

  }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // Add New Contact
  const addContactHandle = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact
    }
    const response = await api.post("/contacts", request);
    setContact([...contacts, response.data]);
  };

  //Delete Button Funtionality
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContact(newContactList);
  };

  //update contact
  const updateContact = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContact(contacts.map((contact) => {
      return contact.id === id ? { ...response.data } : contact;
    }));
  };

  // Search Contact
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts)
    }
  }

  return (
    <div>
      <Router>
        <Link to="/">
          <Header />
        </Link>
        <Routes>
          <Route exact path="/" element={<ContactList contacts={searchTerm.length < 1 ? contacts : searchResult} getContactId={removeContactHandler} searchKeyword={searchHandler} term={searchTerm} />} />
          <Route exact path="/add" element={<AddContact addContactHandle={addContactHandle} />} />
          <Route exact path={`/contacts/:id`} element={<ContactDetails contacts={contacts} />} />
          <Route exact path={`/contacts/delete/:id`} element={<DeleteConfirm deleteConfirm={removeContactHandler} contact={contacts} />} />
          <Route exact path={`/contacts/edit/:id`} element={<EditContact contact={contacts} updateContact={updateContact} />} />
        </Routes>
      </Router>
      {/* <AddContact addContactHandle={addContactHandle} />
      <ContactList contacts={contacts} getContactId ={removeContactHandler}/> */}
    </div>
  );
}

export default App;
