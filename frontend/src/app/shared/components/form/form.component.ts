import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public form: FormGroup;

  constructor(private location: Location) {
    this.form = new FormGroup({
      producto: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onCancel() {
    this.location.back();
  }
}
