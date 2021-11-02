import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGymnaseComponent } from './create-gymnase.component';

describe('CreateGymnaseComponent', () => {
  let component: CreateGymnaseComponent;
  let fixture: ComponentFixture<CreateGymnaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGymnaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGymnaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
