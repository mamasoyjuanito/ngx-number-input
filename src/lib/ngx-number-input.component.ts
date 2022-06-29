import { Component, OnInit, forwardRef, AfterViewInit, Input, ViewChild, ElementRef, Self, Optional, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl, NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'ngx-number-input',
  templateUrl: './ngx-number-input.component.html',
  styleUrls: ['./ngx-number-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxNumberInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: NgxNumberInputComponent,
      multi: true
    }
  ]
})
export class NgxNumberInputComponent implements OnInit, ControlValueAccessor, Validator, OnChanges {
  value!: number;
  _max!: number;
  _min!: number;
  @Input('styleClass') klass!: string;
  @Input('ngClass') ngClass!: string | string[] | Set<string> | { [klass: string]: any; }
  @Input('required') isRequired!: boolean;
  @Input('disabled') isDisabled!: boolean;
  @Input('readonly') isReadOnly!: boolean;
  @Input('placeholder') placeholder: string = "";
  @Input('locale') locale: string = "en-GB";
  @Input('currency') currency: string = null;

  onChange: (_: any) => void = (_: any) => { };
  onTouched: () => void = () => { };

  @ViewChild("inputN", { static: false }) inputN!: ElementRef;

  isFocused: boolean = false;

  set max(val: number) {
    this._max = val;
  }

  @Input("min") get min(): number {
    return this._min;
  }

  set min(val: number) {
    this._min = val;
  }

  @Input("max") get max(): number {
    return this._max;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChange: SimpleChanges) {
    if (simpleChange['max']) {
      this.max = simpleChange['max'].currentValue;
    }
    if (simpleChange['min']) {
      this.min = simpleChange['min'].currentValue;
    }
  }


  validate({ value }: FormControl): ValidationErrors {
    let isNotValid = false;
    if (this.isRequired) {
      if (!this.value || this.value.toString() == "") {
        return {
          "invalid": true,
          "required": true,
        };
      }
    }
    if (this.value) {
      isNotValid = this.value !== Number(value);
      if (!isNotValid && this.min) {
        isNotValid = (Number(value) < this.min);
      }
      if (!isNotValid && this.max) {
        isNotValid = (Number(value) > this.max);
      }
    }

    if (isNotValid) {
      return {
        "invalid": true,
        "max": this.max ? (Number(value) > this.max) : null,
        "min": this.min ? (Number(value) < this.min) : null
      };
    }
    return null;

  }

  updateChanges() {
    this.onChange(this.value);
  }

  writeValue(value: number): void {
    this.value = value;
    this.updateChanges();

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  get numberFormatted(): string {
    if (this.value) {
      if (this.currency) {
        try {
          return Number(this.value).toLocaleString(this.locale, {
            style: 'currency',
            currency: this.currency,
          });
        } catch (error) {
          return Number(this.value).toLocaleString(this.locale);
        }
      } else {
        return Number(this.value).toLocaleString(this.locale, {
        });
      }
    } else {
      return '';
    }
  }


  onFocus() {
    this.isFocused = true;
    setTimeout(() => {
      this.inputN.nativeElement.focus();
    }, 0);

  }


  onBlur() {
    this.onTouched();
    this.isFocused = false;
  }

}

