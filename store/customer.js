import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./Middleware/apiActions";

let lastid = 0;
const slice = createSlice({
  name: "customer",
  initialState: [],
  reducers: {
    customerAdded: (state, action) => {
      //console.log("myaction", action);
      state.push({
        id: ++lastid,
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    customerDeleted: (state, action) => {
      //console.log("myaction", action);
      const index = state.findIndex(
        (customer) => customer.number == action.payload.number
      );
      state.splice(index, 1);
    },
    customerUpdated: (state, action) => {
      const index = state.findIndex(
        (customer) => customer.number == action.payload.number
      );
      state[index] = action.payload;
    },
  },
});
// export const allppl = createSelector(
//   (state) => state.customer,
//   (customer) => customer
// );
// export const getById = (id) =>
//   createSelector(
//     (state) => state,
//     (customer) => customer.filter((c) => c.id === id)
//   );

//console.log("userAdded", userAdded);
export const {
  customerAdded,
  customerDeleted,
  customerUpdated,
} = slice.actions;
export default slice.reducer;

export const addCustomer = (customer) =>
  apiCallBegan({
    data: customer,
    onSuccess: customerAdded.type,
  });
