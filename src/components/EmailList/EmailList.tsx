import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Checkbox, IconButton } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
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
import EmailRow from './EmailRow/EmailRow';
import db from '../../firebase/config';
import moment from 'moment';
import Loader from './ContentLoader/Loader';

function EmailList() {
  const [emails, setEmails] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot: any) =>
        setEmails(
          snapshot.docs.map((doc: any) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

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
      <EmailListRow>
        {loader ? (
          <Loader />
        ) : (
          emails.map(({ id, data }: any) => (
            <EmailRow
              key={id}
              id={id}
              title={data.to}
              subject={data.subject}
              description={data.message}
              time={moment(
                new Date(data.timestamp?.toDate()).toUTCString()
              ).fromNow()}
            />
          ))
        )}
      </EmailListRow>
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
  cursor: pointer;
`;

const EmailListRow = styled.div``;

export default EmailList;
