import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[compare]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true }]
})
export class CompareValidatorDirective implements Validator {
  @Input('compare') controlNameToCompare: string;

  validate(c: AbstractControl): ValidationErrors | null {
    debugger;
    const controlToCompare = c.root.get(this.controlNameToCompare);
    if (controlToCompare) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }

    const t = controlToCompare.value !== c.value;
    const v = t ? { 'compare': true } : null;
    return v;
  }

}
