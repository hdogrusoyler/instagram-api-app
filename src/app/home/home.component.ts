import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMainService } from '../app-main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private dataService: AppMainService,
    private formBuilder: FormBuilder
  ) {
    //this.createForm();

    this.form = this.formBuilder.group({
      //id: [{ value: '', disabled: true }, Validators.required],
      client_id: ['', Validators.required],
      client_secret: ['', Validators.required],
    });
    
  }

  ngOnInit(): void {
    
  }

  form: FormGroup;

  // createForm() {
  //   this.form = this.formBuilder.group({
  //     //id: [{ value: '', disabled: true }, Validators.required],
  //     client_id: ['', Validators.required],
  //     client_secret: ['', Validators.required],
  //   });
  // }

  setFormValue() {
    //this.form.get('id').setValue(this.data.id);
    //this.form.value.id = this.data.id;
  }

  onUpdateData() {
    if (this.form.valid) {
      this.updateData(this.form.value);
    }
  }

  updateData(data: any) {
    this.dataService
      .postData(data)
      .then((r: any) => {
        console.log(r);
      })
      .catch((e: any) => {
        console.log(e.error.title);
        console.log(e.error.text);
      });
  }

}
