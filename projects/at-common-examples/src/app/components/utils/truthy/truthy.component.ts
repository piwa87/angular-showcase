import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AtMaterialModule } from '@at-common/forms';
import { takeTruthy } from '@at-common/utils';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-truthy',
  standalone: true,
  templateUrl: './truthy.component.html',
  styleUrls: ['./truthy.component.scss'],
  imports: [CommonModule, AtMaterialModule]
})
export class TruthyComponent {
  displayedValues: any[] = [];
  isTruthyApplied = false;
  observable: Observable<number | null | undefined> = of(1, null, 2, undefined, 3, null, 4);

  constructor() {
    this.updateDisplayedValues();
  }

  onToggle(event: any) {
    this.isTruthyApplied = event.checked;

    this.updateDisplayedValues();
  }

  updateDisplayedValues() {
    this.displayedValues = [];

    const processingObservable = this.isTruthyApplied ? this.observable.pipe(takeTruthy(10)) : this.observable;

    processingObservable.pipe(tap((value) => this.displayedValues.push(value))).subscribe();
  }

  get toggleText() {
    return this.isTruthyApplied ? 'Pipe enabled' : 'Pipe disabled';
  }
}
