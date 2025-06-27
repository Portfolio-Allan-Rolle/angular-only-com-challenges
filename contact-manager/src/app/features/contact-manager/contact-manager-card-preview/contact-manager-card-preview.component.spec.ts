import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerCardPreviewComponent } from './contact-manager-card-preview.component';

describe('ContactManagerCardPreviewComponent', () => {
  let component: ContactManagerCardPreviewComponent;
  let fixture: ComponentFixture<ContactManagerCardPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactManagerCardPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactManagerCardPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
