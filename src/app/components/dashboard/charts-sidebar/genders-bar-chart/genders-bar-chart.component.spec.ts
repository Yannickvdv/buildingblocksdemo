import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GendersBarChartComponent } from './genders-bar-chart.component';

describe('GendersBarChartComponent', () => {
  let component: GendersBarChartComponent;
  let fixture: ComponentFixture<GendersBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GendersBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GendersBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
