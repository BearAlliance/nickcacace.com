import { Component } from '@angular/core';
import { ContactFormModel } from './contact-form-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  model = new ContactFormModel();
  submitted = false;
  submissionError = false;
  sendText = 'send';

  constructor(private http: HttpClient) {
  }

  onSubmit() {
    const url = 'https://script.google.com/macros/s/AKfycbxgJZ_mu5d7JebVu_ZFfhKHK0i5LLDCH7cV9srXwZ8qxghxnFQ/exec';
    const formData = this.getFormData();
    const options = {
      headers: this.getHeaders()
    };

    this.http.post(url, formData, options)
      .subscribe(
        this.onSubmitSuccess,
        this.onSubmitError
      );
  }

  getHeaders() {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    headers.set('Allow', 'application/json');
    return headers;
  }

  getFormData() {
    const body = new URLSearchParams();
    Object.keys(this.model)
      .forEach(key => {
        console.log(key);
        body.set(key, this.model[key]);
      });
    body.set('formGoogleSheetName', 'responses');
    console.log(body.toString());
    return body.toString();
  }

  onSubmitSuccess() {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
    }, 2000);
  }

  onSubmitError(err) {
    this.submissionError = true;
    setTimeout(() => {
      // this.submissionError = false;
    }, 2000);
    console.log('error', err);
  }
}
