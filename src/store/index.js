import { configureStore } from "@reduxjs/toolkit";
import { postSlicer, userSlicer } from "./slicers";

export default configureStore({
  reducer: {
    posts: postSlicer,
    user: userSlicer,
  },
});
