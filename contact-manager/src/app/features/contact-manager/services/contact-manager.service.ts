import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { IContact } from '../../../api/models';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactManagerService {
  private http = inject(HttpClient);
  private baseURL = 'http://localhost:3000';
  contacts = signal<IContact[]>([]);

  loadContacts() {
    return this.http
      .get<IContact[]>(`${this.baseURL}/api/contacts`)
      .pipe(
        catchError((err) =>
          throwError(() => 'Error fetching contacts: ' + err.message),
        ),
      )
      .subscribe({
        next: (res) => this.contacts.set(res),
      });
  }

  getContact(id: string) {
    return this.http
      .get<IContact>(`${this.baseURL}/api/contacts/${id}`)
      .pipe(
        catchError((err) =>
          throwError(
            () => 'Error fetching contact: ' + err.message + ' with id: ' + id,
          ),
        ),
      );
  }

  editContact(contact: Partial<IContact>, id: string) {
    return this.http
      .patch<IContact>(`${this.baseURL}/api/contacts/${id}`, contact, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .subscribe();
  }

  saveContact(contact: Partial<IContact>) {
    return this.http
      .post<IContact>(`${this.baseURL}/api/contacts/`, contact, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .subscribe();
  }

  deleteContact(id: string) {
    return this.http
      .delete(`${this.baseURL}/api/contacts/${id}`)
      .pipe(catchError(() => throwError(() => 'Error deleting contact: ' + id)))
      .subscribe({
        complete: () => this.loadContacts(),
      });
  }
}
