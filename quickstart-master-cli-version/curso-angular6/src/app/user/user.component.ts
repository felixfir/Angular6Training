import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from './user';

@Component({
    selector: 'user',
    templateUrl: './user.component.html'
})

/*export class UserComponent{
    public componentName:string = 'Users';
    public user:string = 'Félix';
    public age:number = 23;
    public jobs:Array<string> = ['Microsoft', 'Google', 'Inflection Point'];
    comodin:any;

    constructor(){
        this.user = 'Félix';
        this.age = 23;
        this.comodin = 'Sí';
    }

    ngOnInit(){
        this.changeName();
    }

    changeName(){
        this.user = 'Soraya';
    }
}*/

export class UserComponent{
    public componentName:string = 'Users';
    public user:User;
    public parameter;
    private _route: ActivatedRoute;
    private _router: Router;

    constructor(){
        this.user = new User('Félix',30,'Software Engineer',true);
    }

    ngOnInit(){
        console.log(this.user);
        this._route.params.forEach((params: Params) => {
            this.parameter = params['parameter'];
        });
    }

    changeAge(value){
        this.user.age = value;
    }

    onSubmit(){
        console.log(this.user);
    }
}