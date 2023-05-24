import postSlice from "./postSlice";
import userSlice from "./userSlice";

const sliders = {
  postSlicer: postSlice,
  userSlicer: userSlice,
};

export const { postSlicer, userSlicer } = sliders;
