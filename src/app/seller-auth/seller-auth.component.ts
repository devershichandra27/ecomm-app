import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SellerHomeComponent } from '../seller-home/seller-home.component';
import { SellerLoginCredentials, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  registered = false;
  showLogin = false;
  authError = "";
  toggleRegistered() {
    this.registered = !this.registered
  }

  constructor(private seller: SellerService, private router: Router) { }
  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  signUp(data: SignUp): void {
    this.seller.userSignUpFunction(data)
  }
  login(data: SellerLoginCredentials) {
    this.seller.sellerLogin(data)
    this.seller.isLoginError.subscribe((isError) => {
      if (isError){
        this.authError = "Error in logging in.";
      }
    })
  }
}
