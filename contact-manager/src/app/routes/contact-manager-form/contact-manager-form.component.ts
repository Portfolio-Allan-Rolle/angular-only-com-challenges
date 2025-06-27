import { Component, inject, OnInit, signal } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
import { ContactManagerService } from '../../features/contact-manager/services/contact-manager.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IContact } from '../../api/models';

@Component({
  selector: 'app-contact-manager-form',
  imports: [ReactiveFormsModule, NgxTrimDirectiveModule, RouterLink],
  templateUrl: './contact-manager-form.component.html',
  styleUrl: './contact-manager-form.component.scss',
})
export class ContactManagerFormComponent implements OnInit {
  private contactService = inject(ContactManagerService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private fb = inject(NonNullableFormBuilder);
  private mode = signal(false);
  public form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    website: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
        ),
      ],
    ],
    phone_number: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/),
      ],
    ],
  });

  getFormControl(control: string): AbstractControl {
    return this.form.get(control) as AbstractControl;
  }

  isInvalidAndTouchedOrDirty(control: AbstractControl) {
    return control.invalid && (control.touched || control.dirty);
  }

  onFormSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if (this.mode()) {
        const currentContactId = this.route.snapshot.params['id'] as string;
        this.contactService.editContact(this.form.value, currentContactId);
        this.router.navigateByUrl('/home');
      } else {
        this.contactService.saveContact(this.form.value);
        this.router.navigateByUrl('/home');
      }
    }
  }

  patchFormValues(contact: IContact) {
    this.form.patchValue({
      name: contact.name,
      email: contact.email,
      website: contact.website,
      phone_number: contact.phone_number,
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (data['mode'] == 'edit') {
        this.mode.set(true);
      }
      if (this.mode()) {
        const contactId = this.route.snapshot.params['id'] as string;
        this.contactService.getContact(contactId).subscribe({
          next: (contact) => this.patchFormValues(contact),
        });
      }
    });
  }
}
