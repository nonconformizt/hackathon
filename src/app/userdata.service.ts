import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class UserDataService {
    first_name = "default";
    last_name = "default";

    @Output() changed : EventEmitter<any> = new EventEmitter();

    change(newData) {
        this.first_name = newData.first_name;
        this.last_name = newData.last_name;
        this.changed.emit();
    }

}