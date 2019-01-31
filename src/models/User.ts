import {getDB} from '../db';

async function user() {
  let db = await getDB();
  return {
    getUsers: async () => {
      let dbData = await db
        .collection('Users')
        .find()
        .toArray();
      return dbData;
    },
  };
}

export default user();
