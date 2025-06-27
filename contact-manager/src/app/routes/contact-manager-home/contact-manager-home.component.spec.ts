import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerHomeComponent } from './contact-manager-home.component';

describe('ContactManagerHomeComponent', () => {
  let component: ContactManagerHomeComponent;
  let fixture: ComponentFixture<ContactManagerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactManagerHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactManagerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
