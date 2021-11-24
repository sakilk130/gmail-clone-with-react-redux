import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Mail() {
  const history = useNavigate();
  return (
    <Container>
      <MailTools>
        <MailToolsLeft>
          <IconButton onClick={() => history('/')}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </MailToolsLeft>

        <MailToolsRight>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </MailToolsRight>
      </MailTools>

      <MailBody>
        <MailBodyHeader>
          <h2>Subject</h2>
          <LabelImportantIcon />
          <p>Title</p>
          <p className="time">10pm</p>
        </MailBodyHeader>
        <MailMessage>
          <p>This is a message </p>
        </MailMessage>
      </MailBody>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  background-color: whitesmoke;
`;

const MailTools = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
`;
const MailToolsLeft = styled.div`
  display: flex;
`;

const MailToolsRight = styled.div``;

const MailBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  background-color: white;
  padding: 20px;
  height: 100vh;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.25);
`;

const MailBodyHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  padding: 20px;
  position: relative;

  & > h2 {
    font-weight: 400;
    margin-right: 20px;
  }
  & > .MuiSvgIcon-root {
    color: #e8ab02 !important;
  }
  & > .time {
    position: absolute;
    top: 24px;
    right: 0;
    font-size: 12px;
    color: grey;
  }
`;

const MailMessage = styled.div`
  padding: 10px;
  margin-right: 20px;
  overflow-wrap: break-word;
`;

export default Mail;
