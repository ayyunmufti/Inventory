import { createSlice, createSelector } from "@reduxjs/toolkit";

const n = {};

const slice = createSlice({
  name: "customer",
  initialState: [],
  reducers: {
    userAdded: (state, action) => {
      //console.log("myaction", action);
      state.push({
        id: action.payload.id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      });
    },
  },
});
export const allppl = createSelector(
  (state) => state,
  (customer) => customer
);
export const getById = (id) =>
  createSelector(
    (state) => state,
    (customer) => customer.filter((c) => c.id === id)
  );

console.log("userAdded", userAdded);
export const { userAdded } = slice.actions;
export default slice.reducer;

const addNewPerson = (person) => {};
