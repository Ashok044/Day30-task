import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, selectedUser, setSelectedUser }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      updateUser(user);
    } else {
      addUser(user);
    }
    setUser({ name: '', email: '' });
    setSelectedUser(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">{selectedUser ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
