import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerViewContactLinkComponent } from './contact-manager-view-contact-link.component';

describe('ContactManagerViewContactLinkComponent', () => {
  let component: ContactManagerViewContactLinkComponent;
  let fixture: ComponentFixture<ContactManagerViewContactLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactManagerViewContactLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactManagerViewContactLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
