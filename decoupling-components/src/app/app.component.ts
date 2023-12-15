import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {BtnBrainDirective} from "./btn-brain.directive";
import {BtnHelmetDirective} from "./btn-helmet.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BtnBrainDirective, BtnHelmetDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decoupling-components';
}
