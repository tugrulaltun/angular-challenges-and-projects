import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {DateFormatterPipe} from "./pipes/date.formatter.pipe";
import {RouterOutlet} from "@angular/router";
import {CurrencyConverterPipe} from "./pipes/currency.converter.pipe";
import {TruncatePipe} from "./pipes/truncate.pipe";
import {UppercasePipe} from "./pipes/uppercase.pipe";
import {PercentagePipe} from "./pipes/percentage.pipe";
import {FilterArrayPipe} from "./pipes/filter.array.pipe";
import {FormsModule} from "@angular/forms";
import {CapitalizePipe} from "./pipes/capitalize.pipe";
import {KeyValuePipe} from "./pipes/key-value.pipe";
import {SortByPipe} from "./pipes/sort-by.pipe";
import {DistanceConverterPipe} from "./pipes/distance-converter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    DateFormatterPipe,
    CurrencyConverterPipe,
    TruncatePipe,
    UppercasePipe,
    PercentagePipe,
    FilterArrayPipe,
    CapitalizePipe,
    KeyValuePipe,
    SortByPipe,
    DistanceConverterPipe
  ],
  imports: [BrowserModule, RouterOutlet, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
