import {MongoClient} from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'bellysnap';

async function connect() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    // tslint:disable-next-line:no-console
    console.log('Connected correctly to server');
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.log(err.stack);
  }
  return client.db(dbName);
}
export const db = connect();
