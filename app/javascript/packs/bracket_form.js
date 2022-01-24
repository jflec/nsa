import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

const BracketForm = () => {
  const [values, setValues] = useState({
    name: '',
    size: 0,
    usernames: [],
    user_id: '',
    team_size: 2,
    teams: 0,
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

  const handleBracketTeamSizeInputChange = (e) => {
    e.persist();
    if (e.target.value > 64) {
      e.target.value = 64;
    }

    if (e.target.value <= 0) {
      e.target.value = 1;
    }

    setValues((values) => ({
      ...values,
      team_size: e.target.value,
    }));

    teamMaker();
  };

  const teamMaker = () => {
    setValues((values) => ({
      ...values,
      teams: Math.floor(values.size / values.team_size),
    }));
  };

  // const handleUsernameInputSubmit = (e) => {
  //   e.persist();
  //   setValues((values) => ({
  //     ...values,
  //     usernames: [...values.usernames, e.target.value],
  //   }));
  //   console.log(values.usernames);
  // };

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

      <input
        id="bracket-team-size"
        type="number"
        min="2"
        max={values.size / 2}
        placeholder="Team Size"
        name="team size"
        onChange={handleBracketTeamSizeInputChange}
      />

      {values.teams > 0 ? (
        <div id="bracket-participant-container">
          {[...Array(parseInt(values.teams))].map((e, i) => {
            return (
              <div className="bracket-team">
                <h1>Team {i + 1}</h1>
                {values.team_size > 0
                  ? [...Array(parseInt(values.team_size))].map((j, k) => {
                      return <input className="bracket-participant" />;
                    })
                  : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  render(
    <BracketForm />,
    document.body.appendChild(document.createElement('div'))
  );
});
