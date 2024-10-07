import { Injectable, inject, signal } from '@angular/core';
import { browserLocalPersistence, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private authState = new BehaviorSubject<User | null>(null);
  authState$: Observable<User | null> = this.authState.asObservable();

  userId = signal<string>('')

  constructor(private router: Router) {
    this.observeAuthState();
  }

  private observeAuthState() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authState.next(user);
        this.userId.set(user.uid)
      } else {
        this.authState.next(null);
      }
    });
  }

  async login(email: string, password: string) {
    try {
      // Imposta la persistenza della sessione
      await setPersistence(this.auth, browserLocalPersistence);

      // Effettua il login con email e password
      await signInWithEmailAndPassword(this.auth, email, password);

      // Naviga alla panoramica dopo il login
      this.router.navigate(['/panoramica']);
    } catch (error) {
      console.error('Login error: ', error);
      alert('Invalid credentials');
    }
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(this.auth, (user) => {
        unsubscribe(); // Unsubscribe immediately after getting the user state
        resolve(!!user);
      });
    });
  }

  getUser() {
    return this.auth.currentUser;
  }
}
