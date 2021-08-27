import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';


const BackDrop = withTheme(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(p) => p.theme.palette.common.backDrop};
  z-index: 2000;
  display: flex;
`);

const RegisterContainer = withTheme(styled.div`
  position: relative;
  margin: auto;
  width: 37.5rem;
  background: ${(p) => p.theme.palette.common.background};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  max-height: 650px;
  `)

const EditProfile = (props) => {
  return (
    <BackDrop>
      <RegisterContainer></RegisterContainer>
    </BackDrop>
  );
};

export default EditProfile;
