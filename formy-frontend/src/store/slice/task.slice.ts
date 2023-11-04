import { service } from "@/services";
import { TaskGet } from "@/services/task/type";
import { createSlice } from "@reduxjs/toolkit";

interface state  {
  items: {
    [key: string]: TaskGet
  }
}

export const initialState: state = {
  items: {}
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setAll: (state, action) => {
      const payload = action.payload as TaskGet[];
      payload.forEach((item) => state.items[item.id] = item);
    },
    setOne: (state, action) => {
      const payload = action.payload as TaskGet;
      state.items[payload.id] = payload;
    },
    deleteOne: (state, action) => {
      const payload = action.payload as string;
      delete state.items[payload];
    }
  },
});

export const {
  setAll,
  setOne,
  deleteOne
} = taskSlice.actions;
export default taskSlice.reducer;