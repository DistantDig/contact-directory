// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () => {
    openDB('jate', 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains('jate')) {
                console.log('jate database already exists');
                return;
            }
            db.createObjectStore('jate', {keyPath: 'id', autoIncrement: true });
            console.log('jate database created');
        }
    })
};


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
 console.log('Post to the database');
 
 const jateDb = await openDB('jate', 1);
 const tx = jateDb.transaction('jate', 'readwrite');
 const store = tx.objectStore('jate');
 const request = store.add({ content });

 const result = await request;
 console.log('Data saved to the database', result);
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
  console.log('Get from the database');

  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();

  const result = await request;
  console.log('Results from the database', result);
  return result;
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  
};

initdb();
