import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase/config';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }: any) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error: any) => {
        alert(error?.message);
      });
  };

  return (
    <Container>
      <LoginBody>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRceIIBz4GgeNszaN5SupI6p1SJE_Bzgk3Q&usqp=CAU"
          alt="gmail logo"
        />
        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </LoginBody>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  & > img {
    object-fit: contain;
    height: 100px;
  }
  & > button {
    margin-top: 20px;
  }
`;

export default Login;
