import { getDatabase, ref, onValue, set } from 'firebase/database';
import { firebase } from './firebase'

class IDBService {
  getData() {
    throw new Error('You need to implement this method');
  }

  setData() {
    throw new Error('You need to implement this method');
  }
}

export class FirebaseDBService extends IDBService {
  
  constructor() {
    super();
    
  }

  async getData() {
    await firebase.initialization()
    this.db = getDatabase();
    const starCountRef = ref(this.db, 'token');
    const promiseGetData = new Promise((res) => {
      onValue(starCountRef, (snapshot) => {
        res(snapshot.val());
      });
    });

    return await promiseGetData;
  }

  async setData(key) {
    await set(ref(this.db, 'token'), key);

    return await this.getData('token');
  }
}
