import { addtodb, deletetb, getItem } from "../../database/database";
//import { addPerson } from "../database/database";
import * as actions from "./apiActions";
export const myapi = (store) => (next) => (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);
  console.log("hi");

  const { data, onSuccess } = action.payload;
  console.log(data);
  // console.log(onSuccess);
  //addtodb(id=data[id],)
};
