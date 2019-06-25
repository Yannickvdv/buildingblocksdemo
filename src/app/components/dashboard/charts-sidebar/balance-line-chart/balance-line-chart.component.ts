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
  selector: 'app-balance-line-chart',
  templateUrl: './balance-line-chart.component.html',
  styleUrls: ['./balance-line-chart.component.scss']
})
export class BalanceLineChartComponent implements OnInit, OnChanges {
  @Input() users: User[];

  constructor() {}

  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.doughnutChartData = [];
    this.doughnutChartLabels = [];
    this.getDataAndLabels(this.users);
  }

  getDataAndLabels(users: User[]) {
    let isActive = 0;
    let isInactive = 0;
    let unknown = 0;

    users.forEach(user => {
      if (user.isActive) {
        isActive++;
      } else if (!user.isActive) {
        isInactive++;
      } else {
        // If for whatever reason the boolean isn't true or false,
        // add it to unknown. This would be useful if you had an "unknown" value
        // but that is currently not the case.
        unknown++;
      }
    });

    this.doughnutChartData = [[isActive], [isInactive], [unknown]];
    this.doughnutChartLabels = ['Active', 'Inactive', 'Unknown'];
  }
}
