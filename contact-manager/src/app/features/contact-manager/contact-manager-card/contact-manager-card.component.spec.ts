import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerCardComponent } from './contact-manager-card.component';

describe('ContactManagerCardComponent', () => {
  let component: ContactManagerCardComponent;
  let fixture: ComponentFixture<ContactManagerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactManagerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactManagerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
