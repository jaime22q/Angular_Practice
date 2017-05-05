import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracDirectivesComponent } from './prac-directives.component';

describe('PracDirectivesComponent', () => {
  let component: PracDirectivesComponent;
  let fixture: ComponentFixture<PracDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
