import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import editorReducer from "./code/editorSlice"
import codeHistoryReducer from "./code/codeHistorySlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    editor: editorReducer,
    codeHistory: codeHistoryReducer,
  },
});
