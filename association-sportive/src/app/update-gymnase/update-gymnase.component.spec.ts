import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGymnaseComponent } from './update-gymnase.component';

describe('UpdateGymnaseComponent', () => {
  let component: UpdateGymnaseComponent;
  let fixture: ComponentFixture<UpdateGymnaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGymnaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGymnaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
