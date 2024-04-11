import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import editorReducer from "./code/editorSlice"

export default configureStore({
  reducer: {
    auth: authReducer,
    editor: editorReducer,
  },
});
