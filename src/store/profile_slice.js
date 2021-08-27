import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  coverImage: null,
  avatar: null,
  bio: null,
  location: null,
  website: null,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfile(state, action) {
      state.coverImage = action.payload.coverImage;
      state.ava
    }
  }
})