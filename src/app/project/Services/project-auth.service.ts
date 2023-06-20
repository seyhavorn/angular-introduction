import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectAuthService {

  env = environment.firebaseConfigProject;

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    console.log(this.env.authDomain);

    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAOJjXbi3eEPEfl2QYi1ITSfxOveERaChQ',
      // 'https://ng-recipe-course-92b05-default-rtdb.firebaseio.com/?key=AIzaSyAOJjXbi3eEPEfl2QYi1ITSfxOveERaChQ',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
