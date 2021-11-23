import React from 'react';
import styled from 'styled-components';
import { Checkbox, Icon, IconButton } from '@material-ui/core';
import { ArrowDropDown, ChevronLeft } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RedoIcon from '@material-ui/icons/Redo';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section/Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

function EmailList() {
  return (
    <Container>
      <EmailListSettings>
        <EmailListSettingsLeft>
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </EmailListSettingsLeft>

        <EmailListSettingsRight>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </EmailListSettingsRight>
      </EmailListSettings>
      <EmailListSections>
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </EmailListSections>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  overflow: scroll;
`;

const EmailListSettings = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  z-index: 999;
  padding-right: 10px;
`;

const EmailListSettingsLeft = styled.div``;

const EmailListSettingsRight = styled.div``;

const EmailListSections = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  z-index: 999;
`;

export default EmailList;
