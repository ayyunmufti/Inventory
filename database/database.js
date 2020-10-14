import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabase("db1.db");

export const addtodb = (id, name, number) => {
  db.transaction((tx) =>
    tx.executeSql("INSERT INTO customer( id,name,number) values(?,?,?)", [
      id,
      name,
      number,
    ])
  );
  console.log("indb added");
};

export const getItem = () => {
  db.transaction((tx) => {
    return tx.executeSql(
      "select * from customer",
      [],
      (_, { rows: { _array } }) => console.log(_array)
    );
  });
};

export const deletetb = () => {
  db.transaction((tx) => tx.executeSql("delete from customer"), []);
};
