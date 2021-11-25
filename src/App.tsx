import React, { useState, useEffect } from 'react';
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
import Loader from 'react-loader-spinner';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

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
        setLoader(false);
      } else {
        setLoader(false);
      }
    });
  }, []);

  return (
    <Router>
      {loader && (
        <Loading>
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        </Loading>
      )}
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

const Loading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
const Container = styled.div`
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;
