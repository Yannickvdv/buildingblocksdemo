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
  selector: 'app-genders-bar-chart',
  templateUrl: './genders-bar-chart.component.html',
  styleUrls: ['./genders-bar-chart.component.scss']
})
export class GendersBarChartComponent implements OnInit {
  @Input() users: User[];

  constructor() {}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.barChartData = [];
    this.barChartLabels = [];
    this.getDataAndLabels(this.users);
  }

  getDataAndLabels(users: User[]) {
    const groupedByYear = this.groupByYear(users);
    this.barChartLabels = Object.keys(groupedByYear);

    const gendersData = {};
    // For each year
    Object.values(groupedByYear).forEach(usersInYear => {
      const groupedByGender = this.groupByGender(usersInYear as User[]);

      // Get amount of users of each gender
      Object.keys(groupedByGender).forEach(gender => {
        gendersData[gender] = gendersData[gender] || [];
        gendersData[gender].push(groupedByGender[gender].length);
      });
    });

    // Push them to the table
    Object.keys(gendersData).forEach(gender => {
      this.barChartData.push({ data: gendersData[gender], label: gender });
    });
  }

  groupByYear(users: User[]) {
    const usersByYear = {};

    users.forEach(user => {
      const year = new Date(user.registered).getFullYear();
      usersByYear[year] = usersByYear[year] || [];
      usersByYear[year].push(user);
    });

    return usersByYear;
  }

  groupByGender(users: User[]) {
    const usersByGender = {};

    users.forEach(user => {
      const gender = user.gender;
      usersByGender[gender] = usersByGender[gender] || [];
      usersByGender[gender].push(user);
    });

    return usersByGender;
  }
}
