import { Component, output  } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  host:{
    class:"control"
  }
})
export class NewTicketComponent {

   sendData = output<{ text: string; textarea: string }>();
  onSubmit(inputData: HTMLInputElement, textData: HTMLTextAreaElement) {
       this.sendData.emit({text:'inputData.value',textarea:'textData.value'});
 }
}
