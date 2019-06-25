import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { User } from 'src/app/_models/user';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-activity-doughnut-chart',
  templateUrl: './activity-doughnut-chart.component.html',
  styleUrls: ['./activity-doughnut-chart.component.scss']
})
export class ActivityDoughnutChartComponent implements OnInit, OnChanges {
  @Input() users: User[];

  constructor() {}

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData = [];
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.doughnutChartData = [];
    this.doughnutChartLabels = [];
    this.getDataAndLabels(this.users);
  }

  // Not the most dynamic. Could be better giving into account more possibilities
  getDataAndLabels(users: User[]) {
    let isActive = 0;
    let isInactive = 0;
    let unknown = 0;

    users.forEach(user => {
      if (user.isActive) {
        isActive++;
      } else if (user.isActive === false) {
        isInactive++;
      } else {
        // If for whatever reason the boolean isn't true or false,
        // add it to unknown. This would be useful if you had an "unknown" value
        // but that is currently not the case.
        unknown++;
      }
    });

    this.doughnutChartData = [isActive, isInactive, unknown];
    this.doughnutChartLabels = ['Active', 'Inactive', 'Unknown'];
  }
}
