import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerFormComponent } from './contact-manager-form.component';

describe('ContactManagerFormComponent', () => {
  let component: ContactManagerFormComponent;
  let fixture: ComponentFixture<ContactManagerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactManagerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactManagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
