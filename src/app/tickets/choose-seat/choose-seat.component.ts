import { Component, HostListener, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-seat',
  templateUrl: './choose-seat.component.html',
  styleUrls: ['./choose-seat.component.css']
})
export class ChooseSeatComponent implements OnInit {
  @HostListener('window:keydown', ['$event']) click(e : KeyboardEvent){
    if( e.key === "Escape" )
      this.close.emit();
    else if ( e.key === "Enter" && this.chosenSeat !== null )
      this.result.emit(this.chosenSeat);
  }

  @Input() seatsNumber : number;
  @Input() seatsDisabled : number[];

  @Output() close = new EventEmitter<any>();
  @Output() result = new EventEmitter<number>();

  isClickedInside : boolean = false;
  chosenSeat : number = null;


  rows : number[] = [];
  onerow: number[] = [];

  ngOnInit() {
    this.onerow = [1, 2, 3, 4, 5];
    this.rows = Array( this.seatsNumber / 5 ).fill(0).map((x,i)=>i);

    console.warn(this.seatsDisabled);
    
  }

  onChoose( seat : number ) {
    if (seat === this.chosenSeat)
      this.chosenSeat = null;
    else
      this.chosenSeat = seat;
  }

  onSubmit() {
    if ( this.chosenSeat !== null )
      this.result.emit(this.chosenSeat);
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
