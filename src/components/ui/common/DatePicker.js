import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Select from './Select';
import { dates, months, years } from '../../utilities/date';

const DateContainer = styled.div`
  width: 100%;
  display: flex;
  > div {
    margin-right: 0.5rem;
    flex-grow: 1;
  }
  > div:last-child {
    margin-right: 0px;
  }
  > div:first-child {
    flex-grow: 2;
  }
`;

const DatePicker = ({ onChange, name }) => {
  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
  });
  const [days, setDays] = useState(dates(0, 2000));

  const onChangeYearHandler = (_, value) => {
    const monthIndex = months.findIndex(
      (month) => month === date.month
    );
    setDays(dates(monthIndex, value));
    onChange({ ...date, month: monthIndex, year: value });
    setDate({ ...date, year: value });
  };

  const onChangeMonthHandler = (_, value) => {
    const monthIndex = months.findIndex((month) => month === value);
    setDays(dates(monthIndex, date.year));
    onChange({ ...date, month: monthIndex });
    setDate({ ...date, month: value });
  };

  const onChangeDayHandler = (_, value) => {
    const monthIndex = months.findIndex(
      (month) => month === date.month
    );
    onChange({ ...date, month: monthIndex, day: value });
    setDate({ ...date, day: value });
  };

  useEffect(() => {
    // console.log(!days.includes(+date.day));
    if (date.day !== '' && !days.includes(+date.day)) {
      onChange({ ...date, day: '' });
      setDate({ ...date, day: '' });
    }
  }, [date, onChange, days]);

  // console.log(days);
  // console.log(date);
  return (
    <DateContainer>
      <Select
        onChange={onChangeMonthHandler}
        name='month'
        label='Month'
        options={months}
      />
      <Select
        onChange={onChangeDayHandler}
        name='day'
        label='Day'
        options={days}
      />
      <Select
        onChange={onChangeYearHandler}
        name='year'
        label='Year'
        options={years()}
      />
    </DateContainer>
  );
};

export default DatePicker;
