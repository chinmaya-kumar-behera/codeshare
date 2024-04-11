import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: "thi is my code",
  editor: {
    language: "javascript",
    fontSize: 20,
  },
  viewOnly: false,
  isDisabled: false,
  codeData: {},
};

const editorSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    setCode(state, action) {
      state.code = action.payload;
    },
    setEditor(state, action) {
      state.editor = { ...state.editor, ...action.payload };
    },
    setViewOnly(state, action) {
      state.viewOnly = action.payload;
    },
    setDisabled(state, action) {
      state.isDisabled = action.payload;
    },
    setCodeData(state, action) {
      state.codeData = action.payload;
    },
  },
});

export const { setCode, setEditor, setViewOnly, setDisabled, setCodeData } = editorSlice.actions;
export default editorSlice.reducer;
