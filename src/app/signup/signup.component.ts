import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private service: ApiService) { }

  loginform!: FormGroup
  fill: boolean = false



  ngOnInit(): void {

    this.data()
  }

  data() {
    this.loginform = new FormGroup({

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/^[A-Za-z0-9]*$/) // Only letters and numbers
      ]),

      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required])
    })


  }
  submit() {
    this.fill = true;
    console.log(this.loginform.value);




    if (this.loginform.invalid) {
      alert(
        "Try Again"
      )
      return;
    }



  }
}
