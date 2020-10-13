import { configureStore } from "@reduxjs/toolkit";
import reducer from "./customer";
import { myapi } from "../store/myapi";

// export default function configStore() {
//   return configureStore({ reducer });
// }

const store = configureStore({ reducer });

export default store;
