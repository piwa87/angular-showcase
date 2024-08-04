import { Component, Input } from '@angular/core';
import { AceOfBaseClass } from './ace-of-base';

@Component({ template: '' })
export abstract class MultipleFieldBaseClass extends AceOfBaseClass {
  @Input({ required: true }) fgName: string = '';
}
