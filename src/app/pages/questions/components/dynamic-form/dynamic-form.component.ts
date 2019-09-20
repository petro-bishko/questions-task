import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormService } from './dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dynamicFormService: DynamicFormService) {
  }

  ngOnInit() {
  }

  initForm() {
    // this.form = this.fb.group();
  }

}
