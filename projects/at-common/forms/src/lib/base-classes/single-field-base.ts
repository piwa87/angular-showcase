import { Component, Input } from '@angular/core';
import { AceOfBaseClass as AceOfBaseClass } from './ace-of-base';

@Component({ template: '' })
export abstract class SingleFieldBaseClass extends AceOfBaseClass {
  @Input({ required: true }) fcName: string = '';
}
