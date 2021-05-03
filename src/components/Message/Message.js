import React from 'react';

import './Message.css';

import stringsProps from '../../utils/stringsProps';
const Message = (props) => {
  return (
    <article className={`message ${stringsProps(props)}`}>
      <div className="message-header">
        <p>{props.header}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
      <div className="message-body">
        {props.body}
      </div>
  </article>
  );
};

export default Message;
