import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  phoneNumber: number;
  constructor() {
    // this.phoneNumber = 0;
  }

  ngOnInit(): void {
  }

}