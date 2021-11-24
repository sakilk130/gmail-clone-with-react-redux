import React from 'react';
import styled from 'styled-components';
import { Button, IconButton } from '@material-ui/core';
import SidebarOption from './SidebarOption/SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <SidebarContainer>
      <Button onClick={() => dispatch(openSendMessage())}>
        <img src="/images/create_32dp.png" alt="" /> Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={50}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={11} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={5} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={2} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={20} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={30} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={6} />

      <SidebarFooter>
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <DuoIcon />
        </IconButton>
        <IconButton>
          <PhoneIcon />
        </IconButton>
      </SidebarFooter>
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

const SidebarFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Sidebar;
