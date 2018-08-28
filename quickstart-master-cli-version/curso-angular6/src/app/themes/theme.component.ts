import { Component } from '@angular/core';

@Component({
    selector: 'theme',
    templateUrl: './theme.component.html',
})
export class ThemeComponent{

    public title: string;
    public admin: boolean;

    constructor(
    ){
        this.title = "Templates";
        this.admin = false;
    }

    ngOnInit(){
        //alert('entro al template component');
    }
}