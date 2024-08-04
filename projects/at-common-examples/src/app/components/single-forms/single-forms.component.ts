import { CommonModule, KeyValue } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  AtEmailInputForm,
  AtFormsModule,
  AtMaterialModule,
  AtTextInputCustomErrorsForm,
  RadioButtonModel,
  printErrors,
} from '@at-common/forms';
import { PresentThisComponent } from '../present-this/present-this.component';

@Component({
  selector: 'app-single-forms',
  standalone: true,
  imports: [
    AtFormsModule,
    AtMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    PresentThisComponent,
  ],
  templateUrl: './single-forms.component.html',
  styleUrl: './single-forms.component.scss',
})
export class SingleFormsComponent {
  fb = inject(FormBuilder);

  fg = this.fb.group({
    navn: this.fb.control<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    efternavn: this.fb.control<string | null>(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    fritekst: AtTextInputCustomErrorsForm,
    email: AtEmailInputForm,
    favoritFarve: this.fb.control<string>('', [Validators.required]),
    favoritFilm: this.fb.control<string | null>(null, [Validators.required]),
  });

  favoritFarveItems: RadioButtonModel[] = [
    { label: 'Grøn', value: 'green' },
    { label: 'Rød', value: 'red' },
    { label: 'Gul', value: 'yellow' },
    { label: 'Blå', value: 'blue' },
  ];

  favoriteFilmItems: KeyValue<any, string>[] = [
    { key: 'movie-inter', value: 'Interstellar' },
    { key: 'movie-dark', value: 'The Dark Knight' },
    { key: 'movie-oppen', value: 'Oppenheimer' },
    { key: 'movie-incep', value: 'Inception' },
  ];

  onSubmit(): void {
    this.fg.markAllAsTouched();
    if (this.fg.invalid) {
      console.log('Form is invalid.');
      printErrors(this.fg);
      return;
    }
    console.log('Form valid.\nValue:', this.fg.value);
  }
}
