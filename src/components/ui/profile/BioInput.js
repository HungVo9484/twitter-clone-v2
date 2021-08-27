import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

const activeStyle = ({ isActive }) => {
  if (isActive) {
    return css`
      transform: translate(0, 0.5rem) scale(0.65);
      color: ${(p) =>
        p.isError
          ? 'rgb(224, 0, 0)'
          : p.theme.palette.common.labelFontColor};
    `;
  } else {
    return css`
      transform: translate(0, 1.1rem) scale(1);
      color: ${(p) => p.theme.palette.common.labelFontColor};
    `;
  }
};

const countStyle = ({ isCount = false }) => {
  if (isCount) {
    return css`
      & > span {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 0.8rem;
        margin-right: 0.5rem;
        margin-top: 0.5rem;
        display: none;
        color: ${(p) => p.theme.palette.common.labelFontColor};
      }
      &:focus-within > span {
        display: inline-block;
      }
    `;
  } else {
    return css``;
  }
};

const InputContainer = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const InputField = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 5rem;
  padding: 0 0.5rem;
  border: 1px solid
    ${(p) =>
      p.isError
        ? 'rgb(224, 0, 0)'
        : p.theme.palette.common.inputBorderColor};
  border-radius: 4px;
  box-sizing: border-box;
  & > textarea {
    width: 100%;
    height: 100%;
    padding: 1.725rem 0 0.9rem 0;
    outline: 0;
    border: none;
    font-size: 1rem;
    box-sizing: border-box;
    color: ${(p) => p.theme.palette.common.fontColor};
    background-color: ${(p) => p.theme.palette.common.background};
  }
  & > label {
    position: absolute;
    font-size: 1rem;
    pointer-events: none;
    ${activeStyle}
    transform-origin: top left;
    transition: all 0.2s ease-out;
  }
  &:focus-within label {
    transform: translate(0, 0.5rem) scale(0.65);
    color: ${(p) =>
      p.isError ? 'rgb(224, 0, 0)' : p.theme.palette.common.blue};
  }
  &:focus-within {
    border: 3px solid
      ${(p) =>
        p.isError ? 'rgb(224, 0, 0)' : p.theme.palette.common.blue};
  }
  ${countStyle}
`);

const ErrorMessage = styled.small`
  color: rgb(224, 0, 0);
  font-size: 10px;
  padding-left: 0.5rem;
`;

const BioInput = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);

  const onChangeHandler = (event) => {
    if (event.target.value !== '' && isActive === false) {
      setIsActive(true);
    } else if (event.target.value === '' && isActive === true) {
      setIsActive(false);
    }
    setCount(event.target.value.length);
    props.onChange(props.name, event.target.value);
  };
  return (
    <InputContainer>
      <InputField
        isActive={isActive}
        isCount={props.maxLength}
        isError={props.error}
      >
        <textarea
          maxLength={count ? props.maxLength : undefined}
          type={props.type}
          id={props.id}
          // rows='3'
          // cols='60'
          onChange={onChangeHandler}
          onBlur={props.onBlur}
        />
        <label htmlFor={props.id}>{props.label}</label>
        {props.maxLength ? (
          <span>
            {count} / {props.maxLength}
          </span>
        ) : null}
      </InputField>
      {props.error === false ? null : (
        <ErrorMessage>{props.error}</ErrorMessage>
      )}
    </InputContainer>
  );
};

export default BioInput;
