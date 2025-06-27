import { Component, inject, input } from '@angular/core';
import { IContact } from '../../../api/models';
import { RouterLink } from '@angular/router';
import { ContactManagerService } from '../services/contact-manager.service';

@Component({
  selector: 'app-contact-manager-card-preview',
  imports: [RouterLink],
  templateUrl: './contact-manager-card-preview.component.html',
  styleUrl: './contact-manager-card-preview.component.scss',
})
export class ContactManagerCardPreviewComponent {
  public contactService = inject(ContactManagerService);
  contact = input.required<IContact>();
}
