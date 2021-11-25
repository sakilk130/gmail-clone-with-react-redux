import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { auth } from './firebase/config';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      if (user) {
        dispatch(
          login({
            displayName: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <Container>
          <Header />
          <Body>
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </Body>
          {sendMessageIsOpen && <SendMail />}
        </Container>
      )}
    </Router>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;
