import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsSidebarComponent } from './charts-sidebar.component';

describe('ChartsSidebarComponent', () => {
  let component: ChartsSidebarComponent;
  let fixture: ComponentFixture<ChartsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
