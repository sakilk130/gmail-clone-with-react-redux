import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase/config';
import Tooltip from '@material-ui/core/Tooltip';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <title>Gmail</title>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRceIIBz4GgeNszaN5SupI6p1SJE_Bzgk3Q&usqp=CAU"
          alt="gmail logo"
        />
      </HeaderLeft>

      <HeaderMiddle>
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon />
      </HeaderMiddle>

      <HeaderRight>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Tooltip title="Logout">
          <Avatar src={user?.photoURL} onClick={signOut} className="avatar">
            {user?.displayName[0]}
          </Avatar>
        </Tooltip>
      </HeaderRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  & > img {
    object-fit: contain;
    height: 35px;
    margin-left: 5px;
  }
`;

const HeaderMiddle = styled.div`
  display: flex;
  flex: 0.7;
  align-items: center;
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 10px;
  margin: 7px;
  height: 30px;

  & > .MuiSvgIcon-root {
    color: grey;
  }

  & > input {
    border: none;
    width: 100%;
    padding: 10px;
    outline: none;
    font-size: medium;
    background-color: transparent;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  padding: 20px;
  height: 40px;
  & > .avatar {
    cursor: pointer;
  }
`;

export default Header;
