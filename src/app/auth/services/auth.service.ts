import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(email, password);
      return res;
    }
    catch (error) { console.log(error); }
  }

  async register(email: string, password: string) {
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return res;
    }
    catch (error) { console.log(error); }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
    }
    catch (error) { console.log(error); }
  }

}
