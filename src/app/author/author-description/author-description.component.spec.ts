import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDescriptionComponent } from './author-description.component';

describe('AuthorDescriptionComponent', () => {
  let component: AuthorDescriptionComponent;
  let fixture: ComponentFixture<AuthorDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
