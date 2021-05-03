import React from 'react';

import './Formifield.css';

const Formifield = ({label, type, placeholder}) => {
  return (
    <div class="field">
      <label class="label">{label}</label>
      <div class="control">
        <input class="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Formifield;