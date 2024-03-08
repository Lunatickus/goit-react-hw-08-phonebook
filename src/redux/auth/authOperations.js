import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toastError, toastSuccess } from 'services/toastNotifications';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const authInstance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/',
// });

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      // const res = await authInstance.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      toastSuccess('Registration successful');
      return res.data;
    } catch (error) {
      toastError('user already exist');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      // const res = await authInstance.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      toastSuccess(`Welcome ${credentials.email}`);
      return res.data;
    } catch (error) {
      toastError('Such user does not exist');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // await authInstance.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      // const res = await authInstance.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (!persistedToken) return false;
      return true;
    },
  }
);
