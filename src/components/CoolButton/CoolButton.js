import React from 'react';

import './CoolButton.css';

import stringsProps from '../../utils/stringsProps';

const CoolButton = (props) => {
  return (
    <button className={`button ${stringsProps(props)}`}>{props.children}</button>
  );
};

export default CoolButton;