import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'angular-tailwind-nx-user-selector',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
    dataSet = [
        {
            key: '1',
            name: 'John Brown',
            surname:"Smith",
            dateOfBirth:"01/01/2000",
            phone: '054-1234567',
            email: "smith.jone@gmail.com",
            timeStamp: "2020-01-01",
        },
        {
            key: '2',
            name: 'Jim Green',
            surname:"Smith",
            dateOfBirth:"01/01/2000",
            phone: '054-1234567',
            email: "groom.jim@gmail.com",
            timeStamp: "2020-01-01",
        },
        {
            key: '3',
            name: 'Joe Black',
            surname:"Smith",
            dateOfBirth:"01/01/2000",
            phone: '054-1234567',
            email: "rep.jack@gmail.com",
            timeStamp: "2020-01-01",
        }
    ];

    constructor() {
        console.log("am instantiated")
     }

    ngOnInit() {
        
     }
}