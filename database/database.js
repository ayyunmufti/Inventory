import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabase("db1.db");

export const addtodb = (id, fname, lname) => {
  db.transaction((tx) =>
    tx.executeSql("INSERT INTO cus( id,first_name,last_name) values(?,?,?)", [
      id,
      fname,
      lname,
    ])
  );
  console.log("indb added");
};

export const getItem = () => {
  db.transaction((tx) => {
    return tx.executeSql("select * from cus", [], (_, { rows: { _array } }) =>
      console.log(_array)
    );
  });
};

export const deletetb = () => {
  db.transaction((tx) => tx.executeSql("delete from cus"), []);
};
