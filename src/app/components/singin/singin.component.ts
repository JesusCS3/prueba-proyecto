import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  email: string = '';
  password: string = '';
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSingin(form: NgForm): void {
      var credentials = {
      username: form.value.email,
      password: form.value.password
    }
    Auth.signIn(credentials).then( data => {
      this.router.navigate(['/home-page']);
    })
    .catch(err => {
      alert(err.message || JSON.stringify(err));
    })
    console.log(credentials);
  }

  onSinginFacebook(): void {
    Auth.federatedSignIn({customProvider: 'Facebook'})
  }

  onSinginGoogle(): void {
    Auth.federatedSignIn({customProvider: 'Google'})
  }

}
