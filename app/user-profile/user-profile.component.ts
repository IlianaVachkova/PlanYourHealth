import { Component, OnInit } from '@angular/core';
import { User } from '../core/models/user.model';

@Component({
    templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
    public user: User;

    constructor() { }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('currentUser')).user;
    }
}