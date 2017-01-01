import { Component } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { Router }from '@angular/router'

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
})

export class NavbarComponent {
    private pageTitle: string = 'Food Additives';
    public userName: string;

    constructor(
        private authenticationService: AuthenticationService,
        private router : Router) {
     }

    public isLogged() {
        return this.authenticationService.checkIfUserIsLoggedIn();
    }

    public getUserName() {
        let user = JSON.parse(localStorage.getItem('currentUser')).user;
        this.userName = user.username;
        return this.userName;
    }
}