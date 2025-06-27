import { Component } from '@angular/core';
import { ContactManagerCardComponent } from '../../features/contact-manager/contact-manager-card/contact-manager-card.component';

@Component({
  selector: 'app-contact-manager-detail',
  imports: [ContactManagerCardComponent],
  templateUrl: './contact-manager-detail.component.html',
  styleUrl: './contact-manager-detail.component.scss',
})
export class ContactManagerDetailComponent {}
