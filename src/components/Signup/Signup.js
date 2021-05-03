import React from 'react';

import './Signup.css';

import Navbar from '../Navbar/Navbar';
import Formifield from '../Formfield/Formifiled';
import CoolButton from '../CoolButton/CoolButton';
import Message from '../Message/Message';

const Signup = () => {
  return (
    <div>
      <Navbar />

      <Formifield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formifield label="Email" type="email" placeholder="e.g alexsmith@gmail.com" />
      <Formifield label="Password" type="password" placeholder="e.g password" />

      <CoolButton isActive isLarge isPrimary isRouded>Signup</CoolButton>

      <Message header="Hello" body="This is signup page!" />
    </div>
  );
};

export default Signup;