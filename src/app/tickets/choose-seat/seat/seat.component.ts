import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent {
  @Input() disabled : boolean;
  @Input() chosen : boolean;
  @Input() id : number;

  @Output() choose = new EventEmitter<any>();


  onClick() {
    if( !this.disabled ) {
      this.chosen = !this.chosen;
      this.choose.emit();
    }
  }
}
