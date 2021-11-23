import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Container>
      <Header />
      <Sidebar />
    </Container>
  );
}

const Container = styled.div``;

export default App;
