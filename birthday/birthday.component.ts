import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'pmapp-birthday',
    templateUrl: './birthday.component.html',
    styleUrls: ['./birthday.component.css']
  })
  export class BirthdayComponent implements OnInit, AfterViewInit {

    birthdayDate: Date = new Date(1987,5,22);
    dateFormat: string = 'mediumDate';

    handleToggleDateFormatButtonClickedEvent() {
        if (this.dateFormat === 'mediumDate') {
            this.dateFormat = 'dd/MM/yyyy';
        } else {
            this.dateFormat = 'mediumDate';
        }
    }

    ngOnInit(): void {
        console.log('In onInit...');
    }

    ngAfterViewInit(): void {
        console.log('In after view init...');
    }
  }