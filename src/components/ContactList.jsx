import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ContactTable from "./ContactTable";
import SearchBar from "./SearchBar";
import AddContact from "./AddContact";

const ContactList = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          {
            id: 1,
            name: "Jasurbek",
            email: "jasur@example.com",
            phone: "908343131",
          },
        ];
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      Object.values(contact).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [contacts, searchTerm]);

  const handleDelete = useCallback((id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  }, []);

  const handleEdit = useCallback((id, updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === id ? { ...contact, ...updatedContact } : contact
      )
    );
  }, []);

  const addContact = useCallback((newContact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { ...newContact, id: Date.now() },
    ]);
  }, []);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Link
        to="/create-contact"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Add New Contact
      </Link>
      <Routes>
        <Route
          path="/"
          element={
            <ContactTable
              contacts={filteredContacts}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          }
        />
        <Route
          path="/create-contact"
          element={<AddContact onAddContact={addContact} />}
        />
      </Routes>
    </div>
  );
};

export default ContactList;
