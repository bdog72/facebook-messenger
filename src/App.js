//
//

import React, { useState, useEffect } from 'react';
import './App.css';

import { FormControl, Input } from '@material-ui/core';
import Message from './Message';

import db from './firebase';
import firebase from 'firebase';

import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
// import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className='App'>
      <img
        className='App__facebook-messenger-logo'
        src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'
        alt=''
      />
      <h1>FACEBOOK</h1>
      <h2>Welcome {username}</h2>
      <form className='App__form'>
        <FormControl className='App__formControl'>
          {/* <InputLabel>Enter A Message...</InputLabel> */}
          <Input
            className='App__input'
            placeholder='Enter A Message...'
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className='App__iconButton'
            disabled={!input}
            variant='contained'
            color='primary'
            type='submit'
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      {/* <FlipMove> */}
      {messages.map(({ id, message }) => (
        <Message key={id} username={username} message={message} />
      ))}
      {/* </FlipMove> */}
    </div>
  );
}

export default App;
