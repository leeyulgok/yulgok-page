import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendEmail = createAsyncThunk(
  'contact/sendEmail',
  async ({ name, phone, email, message }, thunkAPI) => {
    const firebaseFunctionURL = 'https://us-central1-yulgok-page.cloudfunctions.net/sendEmail';

    try {
      const response = await axios.post(firebaseFunctionURL, { name, phone, email, message });
      console.log('Firebase 연결 성공');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: { status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.error;
      });
  },
});

export default contactSlice.reducer;
