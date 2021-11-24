import React from 'react';
import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import styled from 'styled-components';

interface SidebarOptionProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  title: String;
  number: Number;
  selected?: Boolean;
}

function SidebarOption({ Icon, title, number, selected }: SidebarOptionProps) {
  console.log(selected);
  return (
    <SidebarOptionContainer className={`${selected ? 'active' : ''}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </SidebarOptionContainer>
  );
}

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  color: #818181;

  & > h3 {
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
  }

  & > p {
    display: none;
    font-weight: 300;
  }
  &:hover,
  &:hover > p,
  &:hover > h3,
  &.active,
  &.active > p,
  &.active > h3 {
    background-color: #fcecec;
    color: #c04b37;
    font-weight: 800 !important;
  }

  &.active > p {
    display: inline !important;
  }

  &:hover > p {
    display: inline;
  }
`;

export default SidebarOption;
