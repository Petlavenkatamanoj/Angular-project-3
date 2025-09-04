import { Component, ElementRef } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent,CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

  array: { text: string; textarea: string }[] = [];

  addFunction(sendData:{ text: string; textarea: string })
  {
    this.array.push(sendData);
  }
  
}
