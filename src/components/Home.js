import React, { useState } from 'react';
import { useFormInput } from '../hooks/utility';

const Home = () => {
  const pokemon = useFormInput('bulbasaur');
  const data = {};

  const handleSubmit = () => {
    fetch(`${process.env.REACT_APP_API_URL}${pokemon}`)
      .then(res => res.json())
      .then(data => {
        setCount(data.count);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className={`flex-container-column`}>
      <div className={`flex-container-row`}>
        <p>https://pokeapi.co/api/v2/</p>
        <input {...pokemon} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <p>data.name</p>
    </div>
  );
};

export default Home;
