import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDivider } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  createDateWithHoursAndMinutes,
  formatDateFromIntlToDK,
  formatTimeFromIntlToDK,
  getHoursMinutesAsStringFromDate,
  getNextDay,
  getPreviousDay,
  isDateTodayOrBefore,
  isItSameDate,
} from '@at-common/utils';

@Component({
  selector: 'app-date-functions',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatDivider,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ],
  templateUrl: './date-functions.component.html',
  styleUrls: ['./date-functions.component.scss'],
})
export class DateFunctionsComponent {
  date1 = new FormControl<Date | null>(null);
  date2 = new FormControl<Date | null>(null);
  singleDate = new FormControl<Date | null>(null);
  timeInput = new FormControl<string>('');

  isSameDateResult: boolean | null = null;
  nextDay: Date | null = null;
  previousDay: Date | null = null;
  isTodayOrBeforeResult: boolean | null = null;
  hoursMinutesString: string | null = null;
  createdDate: Date | null | undefined = null;
  currentDate: Date | null | undefined = null;
  formattedCurrentDate: string | null = null;
  currentTime: Date | null | undefined = null;
  formattedCurrentTime: string | null = null;

  isFormatTimeApplied = false;
  isFormatDateApplied = false;

  checkIsSameDate() {
    this.isSameDateResult = isItSameDate(this.date1.value!, this.date2.value!);
  }

  calculateNextPreviousDay() {
    if (this.singleDate.value) {
      this.nextDay = getNextDay(this.singleDate.value);
      this.previousDay = getPreviousDay(this.singleDate.value);
    }
  }

  checkIsTodayOrBefore() {
    this.isTodayOrBeforeResult = isDateTodayOrBefore(this.singleDate.value!);
  }

  getHoursAndMinutes() {
    this.hoursMinutesString = getHoursMinutesAsStringFromDate(
      this.singleDate.value!
    );
  }

  createDateFromTime() {
    this.createdDate = createDateWithHoursAndMinutes(
      this.timeInput.value!,
      new Date()
    );
  }

  get toggleTimeText() {
    return this.isFormatTimeApplied
      ? 'Time formatting enabled'
      : 'Time formatting disabled';
  }

  toggleTimeFormat(event: any) {
    this.isFormatTimeApplied = event.checked;
    this.updateFormattedTime();
  }

  updateFormattedTime() {
    this.currentTime = new Date();
    this.formattedCurrentTime = this.isFormatTimeApplied
      ? formatTimeFromIntlToDK(this.currentTime)
      : this.currentTime.toLocaleTimeString();
  }

  get toggleDateText() {
    return this.isFormatDateApplied
      ? 'Date formatting enabled'
      : 'Date formatting disabled';
  }

  toggleDateFormat(event: any) {
    this.isFormatDateApplied = event.checked;
    this.updateFormattedDate();
  }

  updateFormattedDate() {
    this.currentDate = new Date();
    this.formattedCurrentDate = this.isFormatDateApplied
      ? formatDateFromIntlToDK(this.currentDate)
      : this.currentDate.toLocaleDateString();
  }
}
