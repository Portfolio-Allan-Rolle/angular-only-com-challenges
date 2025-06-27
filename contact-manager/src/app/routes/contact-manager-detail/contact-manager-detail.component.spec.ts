import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerDetailComponent } from './contact-manager-detail.component';

describe('ContactManagerDetailComponent', () => {
  let component: ContactManagerDetailComponent;
  let fixture: ComponentFixture<ContactManagerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactManagerDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactManagerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
