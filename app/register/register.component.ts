import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { UserService } from '../core/services/user.service';

@Component({
	templateUrl: './register.component.html'
})
export class RegisterComponent {
	private model: any = {};
	private loading: boolean = false;
	private successfullRegistrationMessage: string = 'Your registration is successful!';
	private errorRegistrationMessage: string = 'Incorrect input!';
    private minUsernameLength: number = 3;
    private maxUsernameLength: number = 30;
    private minPasswordLength: number = 5;
    private maxPasswordLength: number = 30;

	constructor(
		private router: Router,
		private userService: UserService,
		public toastr: ToastsManager
	) { }

	register() {
		this.loading = true;
		this.userService.create(this.model)
			.subscribe(
			data => {
				this.showSuccessfulRegistrationMessage();
				this.router.navigate(['user/login']);
			},
			error => {
				this.showErrorRegistrationMessage();
				this.loading = false;
			});
	}

	showSuccessfulRegistrationMessage(){
		this.toastr.success(this.successfullRegistrationMessage);
	}

	showErrorRegistrationMessage(){
		this.toastr.error(this.errorRegistrationMessage);
	}
}