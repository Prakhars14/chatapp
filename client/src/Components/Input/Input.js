import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form style={{display: 'flex', borderTop: '2px solid #D3D3D3'}}>
    <input
      style={{
        border: 'none',
        borderRadius:'0',
        padding: '5%',
        width: '80%',
        fontSize: '1.2em'}}
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button style={{
            color: '#fff !important',
            textTransform: 'uppercase',
            textDecoration: 'none',
            background: '#2979FF',
            padding: '20px',
            display: 'inline-block',
            border: 'none',
            width: '20%',
    }} onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;