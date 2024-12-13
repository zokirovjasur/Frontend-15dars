import React, { memo, useState } from "react";

const ContactTable = memo(({ contacts, onDelete, onEdit }) => {
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({});

  const handleEditClick = (contact) => {
    setEditingId(contact.id);
    setEditValues(contact);
  };

  const handleEditChange = (e, field) => {
    setEditValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleEditSave = (id) => {
    onEdit(id, editValues);
    setEditingId(null);
  };

  return (
    <table className="min-w-full bg-white border border-gray-300 text-left">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4 border-b w-1/3">Name</th>
          <th className="py-2 px-4 border-b w-1/3">Email</th>
          <th className="py-2 px-4 border-b w-1/3">Phone</th>
          <th className="py-2 px-4 border-b w-1/3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td className="py-2 px-4 border-b w-1/4">
              {editingId === contact.id ? (
                <input
                  value={editValues.name}
                  onChange={(e) => handleEditChange(e, "name")}
                  className="border rounded px-2 py-1 w-full"
                />
              ) : (
                <span>{contact.name}</span>
              )}
            </td>
            <td className="py-2 px-4 border-b w-1/4">
              {editingId === contact.id ? (
                <input
                  value={editValues.email}
                  onChange={(e) => handleEditChange(e, "email")}
                  className="border rounded px-2 py-1 w-full"
                />
              ) : (
                <span>{contact.email}</span>
              )}
            </td>
            <td className="py-2 px-4 border-b w-1/4">
              {editingId === contact.id ? (
                <input
                  value={editValues.phone}
                  onChange={(e) => handleEditChange(e, "phone")}
                  className="border rounded px-2 py-1 w-full"
                />
              ) : (
                <span>{contact.phone}</span>
              )}
            </td>
            <td className="py-2 px-4 border-b w-1/4 flex space-x-2">
              {editingId === contact.id ? (
                <button
                  onClick={() => handleEditSave(contact.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(contact)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => onDelete(contact.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

export default ContactTable;
