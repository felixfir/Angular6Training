import { Component } from '@angular/core';

@Component({
    selector: 'user',
    templateUrl: './user.component.html'
})

export class UserComponent{
    public nameComponent:string = 'Users';
    public userName:string = 'Félix';
    public age:number = 23;
    public jobs:Array<string> = ['Ferrero Software', 'CDIS', 'Softtek', 'Inflection Point'];

    
}