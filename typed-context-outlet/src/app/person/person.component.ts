import {Component, Input, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";
import {Person} from "../models/person.model";

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  @Input() personRef!: TemplateRef<any>;
  @Input() person!: Person;

  static ngTemplateContextGuard(dir: PersonComponent, ctx: unknown): ctx is { $implicit: Person } {
    return true;
  }
}
