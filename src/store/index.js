import { configureStore } from "@reduxjs/toolkit";
import QuestReducer from "../slice/quest.slice";

const store = configureStore({
  reducer: {
    quest: QuestReducer,
  },
  devTools: process.env.NODE_ENV != "production",
});

export default store;
