import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  "postSlice/getUser",
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/users/${id}`
      )
        .then((res) => res)
        .catch(() => {
          throw new Error("Произошла ошибка:( Попробуйте еще раз!");
        });

      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
    status: null,
    error: null,
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.status = "pending";
    },
    [getUser.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload.message;
    },
  },
});

export default userSlice.reducer;
