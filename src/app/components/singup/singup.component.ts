import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  email: string = '';
  userName: string = '';
  password: string = '';

  verifying: boolean = false;
  verifyCode: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(form: NgForm): void {
    const user = {
      username: form.value.email,
      password: form.value.password,
      attributes: {
        email: form.value.email,
        given_name: form.value.userName
      }
    }
    Auth.signUp(user).then(data => {
      this.verifying = true;
      alert("Te hemos enviado un correo con el código de verficación");
    }).catch(err => {
      alert(err.message || JSON.stringify(err))
    });

    console.log(user);
  }

  onVerify(form: NgForm): void {

    this.onRegister
    const email = form.value.email;
    const code = form.value.verifyCode;

    Auth.confirmSignUp(email, code , { forceAliasCreation: true }).then(data => {
      this.verifying = false;
      alert("Tu correo ha sido verificado");
      this.router.navigate(['/home-page']);
    }).catch(err => {
      alert(err.message || JSON.stringify(err))
    });

    console.log(this.email)
    console.log(this.verifyCode);
  }

  onSinginFacebook(): void {
    Auth.federatedSignIn({customProvider: 'Facebook'})
  }

  onSinginGoogle(): void {
    Auth.federatedSignIn({customProvider: 'Google'})
  }

}
