import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerListComponent } from './contact-manager-list.component';

describe('ContactManagerListComponent', () => {
  let component: ContactManagerListComponent;
  let fixture: ComponentFixture<ContactManagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactManagerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
