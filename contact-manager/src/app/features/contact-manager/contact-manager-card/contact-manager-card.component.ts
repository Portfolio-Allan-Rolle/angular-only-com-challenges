import {
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { IContact } from '../../../api/models';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContactManagerService } from '../services/contact-manager.service';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-manager-card',
  imports: [RouterLink],
  templateUrl: './contact-manager-card.component.html',
  styleUrl: './contact-manager-card.component.scss',
})
export class ContactManagerCardComponent implements OnInit, OnDestroy {
  public contactService = inject(ContactManagerService);
  public route = inject(ActivatedRoute);
  public router = inject(Router);
  contact = input<IContact>();
  currentContactId = signal<string>('');
  currentContact = signal<IContact | null>(null);
  currentContactSubscription!: Subscription;

  ngOnInit(): void {
    const routeId = this.route.snapshot.params['id'] as string;
    this.currentContactId.set(routeId);
    this.currentContactSubscription = this.contactService
      .getContact(routeId)
      .subscribe({ next: (contact) => this.currentContact.set(contact) });
  }

  onDeleteContact(id: string) {
    this.contactService.deleteContact(id);
    this.router.navigateByUrl('/home');
  }

  ngOnDestroy(): void {
    this.currentContactSubscription.unsubscribe();
  }
}
