import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Student } from '../models/Students';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  constructor(private http: HttpClient) {}

  BASE_URL = 'http://localhost:8080/v1/students';

  public getStudents() {
    return this.http.get<Student[]>(`${this.BASE_URL}`).pipe(tap(console.log));
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
}
