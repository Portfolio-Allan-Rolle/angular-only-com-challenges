import { Component, inject, OnInit } from '@angular/core';
import { ContactManagerCardPreviewComponent } from '../../features/contact-manager/contact-manager-card-preview/contact-manager-card-preview.component';
import { ContactManagerService } from '../../features/contact-manager/services/contact-manager.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-manager-home',
  imports: [ContactManagerCardPreviewComponent, RouterLink],
  templateUrl: './contact-manager-home.component.html',
  styleUrl: './contact-manager-home.component.scss',
})
export class ContactManagerHomeComponent implements OnInit {
  contactsService = inject(ContactManagerService);
  contacts = this.contactsService.contacts;

  ngOnInit(): void {
    this.contactsService.loadContacts();
  }
}
