import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

const BracketForm = () => {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/brackets', {});
  };

  const handleChange = (e) => {
    setUserCount(parseInt(e.target.value));
    console.log(userCount);
  };

  return (
    <div id="bracket-form">
      <h1>Create Bracket</h1>
      <form onSubmit={handleSubmit}>
        <label>Bracket Name</label>
        <input type="text" />
        <label>Participant Count</label>
        <input type="text" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  render(
    <BracketForm />,
    document.body.appendChild(document.createElement('div'))
  );
});
