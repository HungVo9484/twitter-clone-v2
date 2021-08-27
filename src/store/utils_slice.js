import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  showEditProfile: false
};

const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    begin(state) {
      state.isLoading = true;
      state.error = null;
    },
    end(state, action) {
      state.isLoading = false;
      state.error = action.payload
    },
    showEditProfile(state) {
      state.showEditProfile = true
    },
    closeEditProfile(state) {
      state.showEditProfile = false
    }
  },
});

export const utilsActions = utilsSlice.actions;

export default utilsSlice.reducer;