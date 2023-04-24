import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() formEdit: any;
  @Output() formEvent: EventEmitter<any> = new EventEmitter();

  public form: FormGroup;

  constructor(private location: Location) {
    this.form = new FormGroup({
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    if (this.formEdit) {
      this.loadDataEdit();
    }
  }

  loadDataEdit() {
    this.form.patchValue(this.formEdit);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.formEvent.emit(this.form.value);
  }

  onCancel() {
    this.location.back();
  }
}
