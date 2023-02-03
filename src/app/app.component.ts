import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public afAuth: AngularFireAuth, public router: Router) {
  }

  login(): void {
    this.afAuth.signInWithPopup(new GoogleAuthProvider()).then(() => {
      this.router.navigate(['todo-list']);
    });
  }

  logout(): void {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['']);
    });
  }
}
