import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[customFor]',
  standalone: true,
})
export class CustomForDirective<T> {
  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<any>) {
  }

  @Input()
  set customForOf(items: T[]) {
    this.viewContainer.clear();
    if (items && items.length > 0) {
      items.forEach((item, index) => {
        this.viewContainer.createEmbeddedView(this.template, {$implicit: item, index});
      });
    } else if (this.emptyTemplate) {
      this.viewContainer.createEmbeddedView(this.emptyTemplate);
    }
  }

  @Input('customForEmpty') emptyTemplate: TemplateRef<any> | undefined;
}
