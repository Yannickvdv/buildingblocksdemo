import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-charts-sidebar',
  templateUrl: './charts-sidebar.component.html',
  styleUrls: ['./charts-sidebar.component.scss']
})
export class ChartsSidebarComponent implements OnInit {
  @Input() users: User[];

  constructor() {}

  ngOnInit() {
  }
}
