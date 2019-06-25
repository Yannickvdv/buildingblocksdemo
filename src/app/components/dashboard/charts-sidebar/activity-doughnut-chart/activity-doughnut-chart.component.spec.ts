import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDoughnutChartComponent } from './activity-doughnut-chart.component';

describe('BalanceLineChartComponent', () => {
  let component: ActivityDoughnutChartComponent;
  let fixture: ComponentFixture<ActivityDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
