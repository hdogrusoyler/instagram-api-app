import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppMainService } from '../app-main.service';
import { BearerModel, BearerResultModel } from '../app-model';

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
      client_id: [
        { value: '263572885265590', disabled: false },
        Validators.required,
      ],
      client_secret: [
        { value: '2627238bc65a44d5ead89c53a0a909e5', disabled: false },
        Validators.required,
      ],
    });
  }

  ngOnInit(): void {}

  form: FormGroup;
  resultModel: BearerResultModel = {
    access_token:"",
    token_type:""
  };
  
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
      // this.updateData(this.form.value);
      this.getData(this.form.value);
    }
  }

  getData(data:BearerModel){
    this.dataService.getBearerData(data).subscribe(result => {
      this.resultModel = result;
      console.log(this.resultModel)
    })
  };

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
