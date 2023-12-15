import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class StateService {
  private disabledState = new BehaviorSubject<boolean>(false);
  disabledState$ = this.disabledState.asObservable();

  setDisabledState(isDisabled: boolean): void {
    this.disabledState.next(isDisabled);
  }
}
