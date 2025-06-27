import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerDeleteContactButtonComponent } from './contact-manager-delete-contact-button.component';

describe('ContactManagerDeleteContactButtonComponent', () => {
  let component: ContactManagerDeleteContactButtonComponent;
  let fixture: ComponentFixture<ContactManagerDeleteContactButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactManagerDeleteContactButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactManagerDeleteContactButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
