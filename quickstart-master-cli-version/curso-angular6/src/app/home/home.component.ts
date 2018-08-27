import { Component } from '@angular/core';
import { CellphoneService } from '../services/cellphone.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [CellphoneService]
})

export class HomeComponent {
    public title = "Main Page";

    constructor(
        private _cellphoneService: CellphoneService
    ){}

    ngOnInit(){
        console.log(this._cellphoneService.getCellphone());
    }
}