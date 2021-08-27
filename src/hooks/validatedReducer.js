export const usernameReducer = (state, action) => {
  const { type, val } = action;
  console.log('nameReducer');
  switch (type) {
    case 'USER_INPUT':
      return {
        value: val,
        isValid: val.trim().length > 5,
      };
    case 'INPUT_BLUR':
      return {
        value: state.value,
        isValid: state.value.trim().length > 5,
      };
    default:
      return state;
  }
};

export const emailReducer = (state, action) => {
  const { type, val } = action;
  switch (type) {
    case 'USER_INPUT':
      return { value: val, isValid: val.includes('@') };
    case 'INPUT_BLUR':
      return {
        value: state.value,
        isValid: state.value.includes('@'),
      };
    default:
      return state;
  }
};

export const passwordReducer = (state, action) => {
  const { type, val } = action;
  switch (type) {
    case 'USER_INPUT':
      return {
        value: val,
        isValid: val.trim().length > 5,
      };
    case 'INPUT_BLUR':
      return {
        value: state.value,
        isValid: state.value.trim().length > 5,
      };
    default:
      return state;
  }
};

export const birthdayReducer = (state, action) => {
  const { type, date } = action;
  const { day, month, year } = date;
  console.log(date);
  switch (type) {
    case 'USER_INPUT':
      if (day === '' || month === '' || year === '') {
        return { value: '', isValid: false };
      }
      const date = new Date(+year, month, +day);
      console.log(date);
      return { value: date, isValid: true };
    default:
      return state;
  }
};
