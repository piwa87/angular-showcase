import { NgModule } from '@angular/core';
import { AtTextInputComponent } from './at-forms-single/at-text-input/at-text-input.component';
import { AtEmailInputComponent } from './at-forms-single/at-email-input/at-email-input.component';
import { AtRadioGroupComponent } from './at-forms-single/at-radio-group/at-radio-group.component';
import { AtSelectComponent } from './at-forms-single/at-select/at-select.component';
import { AtFormNavnRolleComponent } from './at-forms-multi/at-form-navn-rolle/at-form-navn-rolle.component';
import { AtTextInputCustomErrorsComponent } from './at-forms-single/at-text-input/at-text-input-custom-errors.component';

@NgModule({
  declarations: [],
  imports: [
    AtEmailInputComponent,
    AtFormNavnRolleComponent,
    AtRadioGroupComponent,
    AtSelectComponent,
    AtTextInputComponent,
    AtTextInputCustomErrorsComponent,
  ],
  exports: [
    AtEmailInputComponent,
    AtFormNavnRolleComponent,
    AtRadioGroupComponent,
    AtSelectComponent,
    AtTextInputComponent,
    AtTextInputCustomErrorsComponent,
  ],
})
export class AtFormsModule {}
