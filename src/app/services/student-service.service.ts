import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Student } from '../models/Students';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  router!: Router;
  constructor(private http: HttpClient) {}
  status: any;
  BASE_URL = 'http://localhost:8080/v1/students';

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.BASE_URL}`).pipe(tap(console.log));
  }

  public getStudentsById(id: string): Observable<Student> {
    return this.http
      .get<Student[]>(this.BASE_URL + '/' + id)
      .pipe(tap(console.log));
  }

  public saveStudent(student: any) {
    return this.http.post(this.BASE_URL, student);
  }

  public deleteStudent(studentId: String) {
    return this.http
      .delete(this.BASE_URL + '?id=' + studentId)
      .subscribe(() => (this.status = 'Delete successful'));
  }

  public updateStudent(studentId: string, student: any) {
    return this.http.put<Student>(this.BASE_URL + '/' + studentId, student);
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
