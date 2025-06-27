import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  deleteContact(id: string) {
    return this.http
      .delete(`${this.baseURL}/api/contacts/${id}`)
      .pipe(catchError(() => throwError(() => 'Error deleting contact: ' + id)))
      .subscribe({
        complete: () => this.loadContacts(),
      });
  }
}
