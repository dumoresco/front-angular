import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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

  public getStudentsById(id: string) {
    return this.http
      .get<Student[]>(this.BASE_URL + '/' + id)
      .pipe(tap(console.log));
  }

  public saveStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.BASE_URL, student);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  options:
    | {
        headers?: HttpHeaders | { [header: string]: string | string[] };
        observe?: 'body' | 'events' | 'response';
        params?:
          | HttpParams
          | {
              [param: string]:
                | string
                | number
                | boolean
                | ReadonlyArray<string | number | boolean>;
            };
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
      }
    | undefined;
}
