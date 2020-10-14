import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import { myapi } from "../store/Middleware/myapi";

// export default function configStore() {
//   return configureStore({ reducer });
// }

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), myapi],
});

export default store;
