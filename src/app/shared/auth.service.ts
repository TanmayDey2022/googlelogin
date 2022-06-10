
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import firebase from 'firebase/app'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  isLoggedIn() {
    return !!localStorage.getItem("token")
  }

  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem("token", result.user.refreshToken)
        localStorage.setItem("username", result.user.displayName)
        localStorage.setItem("email", result.user.email)
        localStorage.setItem("photo", result.user.photoURL)
        this.router.navigate(['/dashboard'])
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logOut(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }

}
