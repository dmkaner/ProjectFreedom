import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationsPageComponent } from './creations-page.component';

describe('CreationsPageComponent', () => {
  let component: CreationsPageComponent;
  let fixture: ComponentFixture<CreationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
