import { NgModule } from '@angular/core';
import { AtBody1Component } from './at-body1/at-body1.component';
import { AtBody2Component } from './at-body2/at-body2.component';
import { AtH1Component } from './at-h1/at-h1.component';
import { AtH2Component } from './at-h2/at-h2.component';
import { AtH3Component } from './at-h3/at-h3.component';
import { AtH4Component } from './at-h4/at-h4.component';
import { AtH5Component } from './at-h5/at-h5.component';
import { AtH6Component } from './at-h6/at-h6.component';
import { AtSubtitle2Component } from './at-subtitle2/at-subtitle2.component';

@NgModule({
  declarations: [],
  imports: [
    AtBody1Component,
    AtBody2Component,
    AtH1Component,
    AtH2Component,
    AtH3Component,
    AtH4Component,
    AtH5Component,
    AtH6Component,
    AtSubtitle2Component,
  ],
  exports: [
    AtBody1Component,
    AtBody2Component,
    AtH1Component,
    AtH2Component,
    AtH3Component,
    AtH4Component,
    AtH5Component,
    AtH6Component,
    AtSubtitle2Component,
  ],
})
export class AtTextsModule {}
