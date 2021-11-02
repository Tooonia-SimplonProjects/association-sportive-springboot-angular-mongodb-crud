import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssoSportiveComponent } from './asso-sportive.component';

describe('AssoSportiveComponent', () => {
  let component: AssoSportiveComponent;
  let fixture: ComponentFixture<AssoSportiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssoSportiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssoSportiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
