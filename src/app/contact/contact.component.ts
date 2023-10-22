import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name = {
    value: null,
    empty: false
  };
  email = {
    value: null,
    empty: false
  };
  message = {
    value: null,
    empty: false
  };
  checkboxMarked: boolean = true;




  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.checkboxMarked = false;
    this.startInputAnimation();
    this.startContactMeAnimation();
    
  }

  startContactMeAnimation() {
    let element = document.querySelector('.contact-container');

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById('leftContainerContact').classList.add('slide-in-left');
          observer.unobserve(element);
        }
      });
    });

    observer.observe(element);
  }

  startInputAnimation() {
    let element = document.querySelector('.contact-container');

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById('myFormContainer').classList.add('slide-in-right');
          observer.unobserve(element);
        }
      });
    });

    observer.observe(element);
  }

  sendEmail(myForm: NgForm) {
    console.log(myForm.controls['name']) ///////////////////////////////////////////////////Entfernen
    if (!this.checkInput(myForm.controls['name'].valid, this.name)) {
      return
    } else if (!this.checkInput(myForm.controls['email'].valid, this.email)) {
      return
    } else if (!this.checkInput(myForm.controls['message'].valid, this.message)) {
      return
    } else if (!this.acceptPolicy()) {
      return
    } else {
      this.sendMail(this.name.value, this.email.value, this.message.value)
      myForm.reset();
    }
  }


  checkInput(nameValid: boolean, input: any) {
    if (!nameValid) {
      input.empty = true;
      return false;
    } else {
      input.empty = false;
      return true;
    }
  }

  sendMail(name: String, email: String, message: String) {

    let url = "https://formspree.io/f/xrgwjzwp"

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let data = `name=${name}&email=${email}&message=${message}`;
    let errorMessage: string = "";

    this.httpClient.post<any>(url, data, httpOptions).subscribe({
      next: data => {
        console.log("email sent" + JSON.stringify(data));
      },
      error: error => {
        errorMessage = error.message;
        console.log('error!', errorMessage);
      }
    })

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
