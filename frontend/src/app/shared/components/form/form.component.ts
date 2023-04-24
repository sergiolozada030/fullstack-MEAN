import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() formEdit: any;
  @Output() formCreate: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;

  constructor(private location: Location) {
    this.form = new FormGroup({
      product: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.formCreate.emit(this.form.value);
  }

  onCancel() {
    this.location.back();
  }
}
