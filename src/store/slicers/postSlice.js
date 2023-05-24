import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "postSlice/getPosts",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios(`https://jsonplaceholder.typicode.com/posts`)
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

const postsSlice = createSlice({
  name: "postSlice",
  initialState: {
    posts: null,
    postsCopy: null,
    status: null,
    error: null,
    openModal: false,
    post: null,
  },
  reducers: {
    openModalMore: (state) => {
      if (!state.openModal) {
        state.openModal = true;
      } else {
        state.openModal = false;
      }
    },
    findPost: (state, action) => {
      state.post = state.posts.find((post) => {
        return post.id === action.payload.id;
      });
    },
    searchPost: (state, action) => {
      state.posts = state.postsCopy.filter((post) => {
        if (
          post.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          post.body.toLowerCase().includes(action.payload.toLowerCase())
        ) {
          return post;
        }
      });
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "pending";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
      state.postsCopy = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload.message;
    },
  },
});

export const { openModalMore, findPost, searchPost } = postsSlice.actions;
export default postsSlice.reducer;
