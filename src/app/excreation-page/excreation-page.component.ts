import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-excreation-page',
  templateUrl: './excreation-page.component.html',
  styleUrls: ['./excreation-page.component.scss']
})
export class ExcreationPageComponent {

  form: FormGroup;

  constructor(private db: AngularFirestore, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', Validators.required]
    });
  }

  onSubmit() {
    const { email } = this.form.value;
    const date = Date();
    const html = `
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
    `;
    let formRequest = { email, date, html };
    this.db.collection('requests').add({
      ...formRequest
    });
    this.form.reset();
  }

}


