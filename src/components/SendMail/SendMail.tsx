import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import db from '../../firebase/config';
import firebase from 'firebase';

interface IFormInputs {
  to: string;
  subject: string;
  message: string;
}

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const dispatch = useDispatch();

  const onSubmit = (data: IFormInputs) => {
    db.collection('emails').add({
      to: data.to,
      subject: data.subject,
      message: data.subject,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <Container>
      <SendMailHeader>
        <h3>New Message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} />
      </SendMailHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="To" {...register('to', { required: true })} />
        {errors.to && <p className="error">To is required !!</p>}
        <input
          placeholder="Subject"
          {...register('subject', { required: true, maxLength: 10 })}
        />
        {errors.subject && <p className="error">Subject is required !!</p>}

        <input
          placeholder="Message"
          className="message"
          {...register('message', { required: true })}
        />
        {errors.message && <p className="error">Message is required !!</p>}
        <SendMailOptions>
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </SendMailOptions>
      </form>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 50px;
  background-color: #404040;
  width: 40%;
  height: 40%;
  max-width: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.25);

  & > form {
    display: flex;
    flex: 1;
    flex-direction: column;
    & > input {
      height: 30px;
      padding: 10px;
      border: none;
      border-bottom: 1px soldi whitesmoke;
      outline: none;
    }
    & > .message {
      flex: 1;
    }
    & > .error {
      background-color: white;
      color: red;
      text-align: right;
      padding: 2px;
    }
  }
`;
const SendMailHeader = styled.div`
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  & > h3 {
    color: whitesmoke;
    font-size: 13px;
  }
  & > .MuiSvgIcon-root {
    cursor: pointer;
  }
`;
const SendMailOptions = styled.div`
  & > button {
    background-color: #3079ed !important;
    text-transform: capitalize !important;
    margin: 15px !important;
  }
`;

export default SendMail;
