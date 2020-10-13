import { addPerson } from "../database/database";
export const myapi = (store) => (next) => (action) => {
  console.log(store);
  console.log(next);

  console.log(action);
};
