import React from 'react';
import styled from 'styled-components';
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../../features/mailSlice';

interface IEmailRow {
  id: String;
  title: String;
  subject: String;
  description: String;
  time: String;
}

function EmailRow({ id, title, subject, description, time }: IEmailRow) {
  const history = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history('/mail');
  };
  // const

  return (
    <Container onClick={openMail}>
      <EmailRowOptions>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </EmailRowOptions>
      <EmailRowTitle>{title}</EmailRowTitle>
      <EmailRowMessage>
        <h4>
          {subject} <span>{description}</span>
        </h4>
      </EmailRowMessage>
      <EmailRowTime>{time}</EmailRowTime>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid whitesmoke;
  cursor: pointer;
  z-index: 999;
  &:hover {
    border-top: 1px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
  }
`;

const EmailRowOptions = styled.div`
  display: flex;
`;
const EmailRowTitle = styled.div``;

const EmailRowMessage = styled.div`
  display: flex;
  flex: 0.8;
  align-items: center;
  font-size: 13px;
  padding: 10px;
  & > h4 {
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    padding-right: 5px;
    & > span {
      font-weight: 400;
      color: gray;
    }
  }
`;
const EmailRowTime = styled.p`
  padding-right: 15px;
  font-size: 9px;
  font-weight: bold;
`;

export default EmailRow;
