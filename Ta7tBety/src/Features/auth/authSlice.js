
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, signup } from './authAPI';



const initialState = {
    loading: false,
    error: null,
    token: null,
  };
  

export const signupUser = createAsyncThunk('auth/signupUser', async (userData, thunkAPI) => {
  try {
    const response = await signup(userData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (userData, thunkAPI) => {
  try {
    const response = await login(userData);
    console.log("API Response:", response.data);

    localStorage.setItem('authToken', response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('authToken') || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('authToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

