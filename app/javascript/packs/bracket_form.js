import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

const BracketForm = () => {
  const [values, setValues] = useState({
    name: '',
    size: 0,
    usernames: [],
    user_id: '',
  });

  const handleBracketNameInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      name: e.target.value,
    }));
  };

  const handleBracketSizeInputChange = (e) => {
    e.persist();
    if (e.target.value > 128) {
      e.target.value = 128;
    }

    setValues((values) => ({
      ...values,
      size: e.target.value,
    }));
  };

  const handleUsernameInputSubmit = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      usernames: [...values.usernames, e.target.value],
    }));
    console.log(values.usernames);
  };

  return (
    <div id="bracket-form">
      <input
        id="bracket-name"
        type="text"
        placeholder="Bracket Name"
        name="name"
        value={values.name}
        onChange={handleBracketNameInputChange}
      />
      <input
        id="bracket-size"
        type="number"
        min="1"
        max="128"
        placeholder="Bracket Size"
        name="size"
        value={values.size}
        onChange={handleBracketSizeInputChange}
      />
      {values.size > 0
        ? [...Array(parseInt(values.size))].map((e, i) => {
            return (
              <input type="text" key={i} onChange={handleUsernameInputSubmit} />
            );
          })
        : null}
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  render(
    <BracketForm />,
    document.body.appendChild(document.createElement('div'))
  );
});
