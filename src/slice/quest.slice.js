import { createSlice } from "@reduxjs/toolkit";
// {
//   id, variant, isTrue;
// }
const questSlice = createSlice({
  name: "quest",
  initialState: {
    answers: [],
    username: "",
  },
  reducers: {
    postAnswer: (state, action) => {
      state.answers = action.payload;
    },
    postUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { postAnswer, postUsername } = questSlice.actions;
export default questSlice.reducer;
