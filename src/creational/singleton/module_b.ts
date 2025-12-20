import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabase = MyDatabaseClassic.instance;
myDatabase.add({ name: 'Paulo', age: 22 });
myDatabase.add({ name: 'Paula', age: 68 });
myDatabase.show();
