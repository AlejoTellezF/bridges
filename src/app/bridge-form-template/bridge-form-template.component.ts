import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bridge-form-template',
  templateUrl: './bridge-form-template.component.html',
  styleUrls: ['./bridge-form-template.component.css']
})
export class BridgeFormTemplateComponent implements OnInit {

  id: string;
  name: string;
  lat: number;
  lng: number;
  year: number;
  length: number | null;
  width: number | null;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('submit', {
      value: form.value,
      valid: form.valid,
      dirty: form.dirty,
      touched: form.touched
    });
  }

}
