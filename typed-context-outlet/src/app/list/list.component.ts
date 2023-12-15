import {Component, Input, TemplateRef} from '@angular/core';
import {NgForOf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgForOf,
    NgTemplateOutlet
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent<T> {
  @Input() listRef!: TemplateRef<any>;
  @Input() list!: T[];

  static ngTemplateContextGuard<T>(dir: ListComponent<T>, ctx: unknown): ctx is { $implicit: T, index: number } {
    return true;
  }
}
