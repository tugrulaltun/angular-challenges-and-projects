import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-rating-control',
  templateUrl: './rating-control.component.html',
  styleUrls: ['./rating-control.component.css'],
  standalone: true,
  imports: [
    NgForOf
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingControlComponent),
      multi: true
    }
  ]
})
export class RatingControlComponent implements ControlValueAccessor {
  rating: string | null = null;

  onChange: any = () => {
  };
  onTouch: any = () => {
  };

  writeValue(value: any): void {
    this.rating = value;
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  updateRating(value: number): void {
    this.rating = value.toString();
    this.onChange(this.rating);
    this.onTouch();
  }
}
