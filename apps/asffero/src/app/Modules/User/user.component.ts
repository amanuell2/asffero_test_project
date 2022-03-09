import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-selector',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
    constructor() {
        console.log("am instantiated")
     }

    ngOnInit() {
        
     }
}