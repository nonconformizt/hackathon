import { Component, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choose-seat',
  templateUrl: './choose-seat.component.html',
  styleUrls: ['./choose-seat.component.css']
})
export class ChooseSeatComponent {
  @HostListener('window:keydown', ['$event']) click(e : KeyboardEvent){
    if( e.key === "Escape" )
      this.close.emit();
    else if ( e.key === "Enter" && this.chosenSeat !== null )
      this.close.emit(this.chosenSeat);
  }

  @Output() close = new EventEmitter<any>();
  @Output() result = new EventEmitter<number>();

  isClickedInside : boolean = false;
  chosenSeat : number = null;

  seatsNumber : number = 45;

  seatsDisabled : number[] = [1, 3, 11, 12, 13,  15, 16, 34, 35, 40, 41];
  rows : number[] = [];
  onerow: number[] = [];

  constructor() {
    this.onerow = [1, 2, 3, 4, 5];
    this.rows = Array(this.seatsNumber / 5).fill(0).map((x,i)=>i);      
  }

  onChoose( seat : number ) {

    if (seat === this.chosenSeat)
      this.chosenSeat = null;
    else
      this.chosenSeat = seat;

    console.warn(this.chosenSeat);

  }





  onClickInside() {
    this.isClickedInside = true;
  }

  onClickOutside() {
    if(!this.isClickedInside) {
      if(this.chosenSeat !== null)
        this.result.emit(this.chosenSeat);
      else 
        this.close.emit();
    }
    this.isClickedInside = false;
  }

}
