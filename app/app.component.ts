import { Component, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'mvdb-app',
    templateUrl: './app.component.html',
})

export class AppComponent {
    constructor(private toastr: ToastsManager, private viewContainerRef: ViewContainerRef) {
		this.toastr.setRootViewContainerRef(viewContainerRef);
	}
}