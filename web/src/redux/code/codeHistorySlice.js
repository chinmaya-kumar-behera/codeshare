import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  codesShares: [],
};

const codeHistorySlice = createSlice({
  name: "codeHistory",
  initialState,
  reducers: {
    setCodesHistory(state, action) {
      state.codesShares = action.payload;
    },
  },
});

export const { setCodesHistory } = codeHistorySlice.actions;
export default codeHistorySlice.reducer;
