import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSingup() {
    Auth.signOut().then( () => {
      this.router.navigate(['/']);
    }).catch( err => {
      alert(err.message || JSON.stringify(err));
    })
  }

}
