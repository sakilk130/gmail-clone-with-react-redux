import React from 'react';
import styled from 'styled-components';
import { Button, IconButton } from '@material-ui/core';
import SidebarOption from './SidebarOption/SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';

function Sidebar() {
  return (
    <SidebarContainer>
      <Button>
        <img src="/images/create_32dp.png" alt="" /> Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={50} />
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  flex: 0.3;
  max-width: 300px;
  padding-right: 20px;

  & > Button {
    margin-top: 15px !important;
    margin-left: 10px !important;
    margin-bottom: 15px !important;
    text-transform: capitalize !important;
    color: grey;
    padding-left: 35px !important;
    padding-right: 35px !important;
    padding-top: 15px !important;
    padding-bottom: 15px !important;
    border-radius: 30px !important;
    box-shadow: 0px 2px 5px -2px rgb(0, 0, 0, 0.75);
  }
`;
export default Sidebar;
