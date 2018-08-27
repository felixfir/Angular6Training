import { Injectable } from '@angular/core';

@Injectable()
export class CellphoneService{
    public cellphone: string = '1234567890'

    getCellphone(){
        return this.cellphone;
    }
}