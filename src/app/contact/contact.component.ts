import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  inputName = {
    value: null,
    empty: false
  };
  inputEmail = {
    value: null,
    empty: false
  };
  inputMessage = {
    value: null,
    empty: false
  };

  checkboxMarked: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.checkboxMarked = false;
  }

  sendEmail(myForm: NgForm) {
    console.log(myForm.controls['nameInput'])
    if(!this.checkInput(myForm.controls['nameInput'].valid, this.inputName)) {
      return
    }
    if (!this.checkInput(myForm.controls['emailInput'].valid, this.inputEmail)) {
      return
    }
    if (!this.checkInput(myForm.controls['messageInput'].valid, this.inputMessage)) {
      return
    }
    if (!this.acceptPolicy()) {
      return
    }
  }

  checkInput(nameValid: boolean, input : any) {
    if (!nameValid) {
      input.empty = true;
      return false;
    } else {
      input.empty = false;
      return true;
    }
  }

  acceptPolicy() {
    if (!this.checkboxMarked) {
      document.getElementById('acceptPolicy')?.classList.add('color-red');
      return false;
    } else {
      document.getElementById('acceptPolicy')?.classList.remove('color-red');
      return true;
    }
  }

  setPolicy() {
    if (this.checkboxMarked) {
      this.checkboxMarked = false;
    } else {
      this.checkboxMarked = true;
    }
  }
}
