import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGymnaseComponent } from './details-gymnase.component';

describe('DetailsGymnaseComponent', () => {
  let component: DetailsGymnaseComponent;
  let fixture: ComponentFixture<DetailsGymnaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsGymnaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGymnaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
