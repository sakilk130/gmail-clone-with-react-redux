import React from 'react';
import styled from 'styled-components';
import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

interface SectionProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  title: String;
  color: String;
  selected?: Boolean;
}

function Section({ Icon, title, color, selected }: SectionProps) {
  return (
    <Container
      className={`${selected && 'active'}`}
      style={{
        borderBottom: `3px solid ${selected && color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom-width: 2px;
  padding: 15px;
  min-width: 200px;
  & > h4 {
    font-size: 14px;
    margin-left: 15px;
  }
  &:hover {
    background-color: whitesmoke;
    border-width: 3px !important;
  }
  &.active {
    background-color: whitesmoke;
    border-width: 3px !important;
  }
`;

export default Section;
