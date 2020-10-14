import { createSlice } from "@reduxjs/toolkit";

let lastid = 0;

const slice = createSlice({
  name: "Suppliers",
  initialState: [],
  reducers: {
    supplierAdded: (state, action) => {
      state.push({
        id: ++lastid,
        name: action.payload.name,
        number: action.payload.number,
      });
    },
  },
});

export default slice.reducer;
export const { supplierAdded } = slice.actions;
