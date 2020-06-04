import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcreationPageComponent } from './excreation-page.component';

describe('ExcreationPageComponent', () => {
  let component: ExcreationPageComponent;
  let fixture: ComponentFixture<ExcreationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcreationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
