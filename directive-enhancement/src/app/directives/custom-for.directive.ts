import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[customFor]'
})
export class CustomForDirective<T> {
  private _emptyTemplate: TemplateRef<any> | null = null;

  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<any>) {
  }

  @Input()
  set customForOf(items: T[] | null) {
    this.viewContainer.clear();
    if (items && items.length > 0) {
      items.forEach((item, index) => {
        this.viewContainer.createEmbeddedView(this.template, {$implicit: item, index});
      });
    }

    if (items && items.length === 0 && this._emptyTemplate) {
      this.viewContainer.createEmbeddedView(this._emptyTemplate);
    }
  }

  @Input('customForEmpty')
  set emptyTemplate(value: TemplateRef<any>) {
    this._emptyTemplate = value;
  }
}
