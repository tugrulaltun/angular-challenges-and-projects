import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  @Input() userId?: string;
  @Input() userName?: string;
  @Input() permission?: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
    });

    this.route.queryParams.subscribe(queryParams => {
      this.userName = queryParams['name'];
    });

    this.route.data.subscribe(routeData => {
      this.permission = routeData['permission'];
    });
  }
}
