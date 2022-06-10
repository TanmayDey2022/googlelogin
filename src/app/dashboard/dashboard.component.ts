import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userInfo = {
    username: '',
    useremail: '',
    photo: '',

  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userInfo.username = localStorage.getItem("username")
    this.userInfo.useremail = localStorage.getItem("email")
    this.userInfo.photo = localStorage.getItem("photo")
    console.log(this.userInfo.photo)
  }

  userImage() {
    return localStorage.getItem
  }

  logOut(){
    this.authService.logOut()
  }

}
