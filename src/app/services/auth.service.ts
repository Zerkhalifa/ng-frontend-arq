import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  constructor( private http: HttpClient ) {
  }

  registerUser( body: { name: string, surname: string, email: string, password: string } ): Observable<UserModel> {
    return this.http.post<UserModel>( `${ environment.root_api }${ environment.endpoints.register_user }`, body );
  }
}
