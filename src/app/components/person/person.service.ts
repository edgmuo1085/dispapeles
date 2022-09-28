import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person.interface';
import { TypeID } from '../models/type-id.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  hostname: string = '';

  constructor(private http: HttpClient) {
    this.hostname = environment.api;
  }

  getAll(): Observable<Person[]> {
    const url = `${this.hostname}person`;
    return this.http.get<Person[]>(url);
  }

  getOne(id: string): Observable<Person> {
    const url = `${this.hostname}person/${id}`;
    return this.http.get<Person>(url);
  }

  createPerson(person: Person): Observable<Person> {
    const url = `${this.hostname}person`;
    return this.http.post<Person>(url, person);
  }

  updatePerson(id: string, person: Person): Observable<any> {
    const url = `${this.hostname}person/${id}`;
    return this.http.put<any>(url, person);
  }

  deletePerson(id: string): Observable<any> {
    const url = `${this.hostname}person/${id}`;
    return this.http.delete<any>(url);
  }

  getTypeIdentification(): Observable<TypeID[]> {
    const url = `${this.hostname}tipoidentificacion`;
    return this.http.get<TypeID[]>(url);
  }
}
