import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Body>
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </Body>
        <SendMail />
      </Container>
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
