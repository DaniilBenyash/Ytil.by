import { initializeApp } from 'firebase/app';
import { getDatabase } from '@firebase/database';

export class FirebaseInitialization {

  async initialization() {
    this.response = await fetch('/api/tokenInfo')
    this.conf = JSON.parse(await this.response.json())
    this.app = initializeApp(this.conf);
    getDatabase(this.app);
  }
}

export const firebase = new FirebaseInitialization();
