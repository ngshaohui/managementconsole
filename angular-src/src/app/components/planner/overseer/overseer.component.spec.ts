import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverseerComponent } from './overseer.component';

describe('OverseerComponent', () => {
  let component: OverseerComponent;
  let fixture: ComponentFixture<OverseerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverseerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverseerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
