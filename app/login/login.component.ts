import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../core/services/authentication.service';

@Component({
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
	model: any = {};
	loading: boolean = false;
	returnUrl: string;

	constructor(
		private router: Router, 
		private route: ActivatedRoute,
		private authenticationService: AuthenticationService
	){}

	ngOnInit() {
        this.authenticationService.logout();
 
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                   this.loading = false;
                });
    }
}