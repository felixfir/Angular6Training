import { Component } from '@angular/core';
import { CellphoneService } from '../services/cellphone.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [CellphoneService]
})

export class HomeComponent {
    public title = "Main Page";

    public date;

    constructor(
        private _cellphoneService: CellphoneService
    ){
        this.date = new Date(2017,4,15);
    }

    ngOnInit(){
        console.log(this._cellphoneService.getCellphone());
    }
}