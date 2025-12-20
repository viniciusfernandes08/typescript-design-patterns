import { MyDatabaseClassic } from "./db/my-database-classic";

const myDatabase = MyDatabaseClassic.instance;
myDatabase.add({ name: 'Julio', age: 25 });
myDatabase.add({ name: 'Julia', age: 62 });
myDatabase.show();
