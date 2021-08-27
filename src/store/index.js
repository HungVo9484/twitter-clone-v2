import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth_slice';
import utilsSlice from './utils_slice';

const store = configureStore({
  reducer: { auth: authSlice, utils: utilsSlice },
});

export default store;
