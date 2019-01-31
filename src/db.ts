import {MongoClient} from 'mongodb';
import {Db} from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'bellysnap';

let db: Promise<Db> | undefined;

async function connect() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    // tslint:disable-next-line:no-console
    console.log('Connected correctly to server');
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err.stack);
    throw err;
  }
  return client.db(dbName);
}

export const getDB = async () => {
  if (db == null) {
    db = connect();
  }
  return db;
};
