import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

import arrowBlue from '../../../assets/arrow-blue.svg';
import arrowGrey from '../../../assets/arrow-grey.svg';

const Menu = withTheme(styled.div`
  /* width: 100%; */
  height: 3.6rem;
  position: relative;
  padding: 0 0.5rem;
  border: 1px solid ${p => p.theme.palette.common.inputBorderColor};
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  label {
    font-size: 0.78rem;
    padding: 0.2rem 0;
    color: ${p => p.theme.palette.common.labelFontColor}
  }
  select {
    font-size: 1rem;
    color: ${p => p.theme.palette.common.fontColor};
    padding-left: 0px;
    border: none;
    outline: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    background: transparent url(${arrowGrey}) no-repeat
      right;
  }

  &:focus-within label {
    color: ${(p) => p.theme.palette.common.blue};
  }
  &:focus-within {
    border: 3px solid ${(p) => p.theme.palette.common.blue};
  }
  &:focus-within select {
    background-image: url(${arrowBlue});
  }
`);

const Select = ({ name, label, options, onChange }) => {
  const [value, setValue] = useState('');

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    onChange(name, e.target.value);
  };

  if (
    name === 'day' &&
    value !== '' &&
    !options.includes(+value)
  ) {
    setValue('');
  }
  return (
    <Menu>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChangeHandler}
      >
        <option value='' disabled />
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </Menu>
  );
};

export default Select;
