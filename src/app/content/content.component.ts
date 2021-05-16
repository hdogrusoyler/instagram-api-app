import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppMainService } from '../app-main.service';
import { TokenModel, BearerModel, BearerResultModel, TokenResultModel, Datum, Paging } from '../app-model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, OnChanges {
  constructor(
    private dataService: AppMainService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createBearerForm();
    this.createTokenForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.resultBearerModel) {
      // if (this.resultBearerModel.access_token) {
      // this.setTokenFormValue(this.resultModel);
      // }
    }
  }

  bearerForm: FormGroup = new FormGroup({
    client_id: new FormControl(),
    client_secret: new FormControl(),
  });

  tokenForm: FormGroup = new FormGroup({
    client_id: new FormControl(),
    access_token: new FormControl(),
  });

  resultBearerModel: BearerResultModel = {
    access_token: '',
    token_type: '',
  };

  resultTokenModel: TokenResultModel = {
    data: [],
    paging: new Paging(),
  };

  createBearerForm() {
    this.bearerForm = this.formBuilder.group({
      client_id: [{ value: '263572885265590', disabled: false }, Validators.required],
      client_secret: [{ value: '2627238bc65a44d5ead89c53a0a909e5', disabled: false },Validators.required],
    });
  }

  createTokenForm() {
    this.tokenForm = this.formBuilder.group({
      client_id: [{ value: '', disabled: false }, Validators.required],
      access_token: [{ value: '', disabled: false }, Validators.required],
    });
  }

  onUpdateBearerData() {
    if (this.bearerForm.valid) {
      this.getBearerData(this.bearerForm.value);
    }
  }

  getBearerData(data: BearerModel) {
    this.dataService.getBearerData(data).subscribe((result) => {
      this.resultBearerModel = result;
      this.setTokenFormValue(data.client_id, this.resultBearerModel.access_token);
    });
  }

  setTokenFormValue(client_id:string, access_token:string) {
    this.tokenForm.setValue({ client_id: client_id, access_token: access_token });
    
  }

  onUpdateTokenData() {
    if (this.tokenForm.valid) {
      this.getTokenData(this.tokenForm.value);
    }
  }

  getTokenData(data: TokenModel) {
    this.dataService.getTokenData(data).subscribe((result) => {
      this.resultTokenModel = result;
      console.log(this.resultTokenModel);
      // this.setFormValue(this.resultModel);
    });
  }

  //
  //
  //
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
