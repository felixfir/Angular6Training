import { Component } from '@angular/core';
import { TreeModel } from 'ng2-tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular6';

  public tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    settings: {
      'static': true
    },
    children: [
      {
        value: 'Object-oriented programming',
        children: [{ value: 'Java' }, { value: 'C++' }, { value: 'C#' }]
      },
      {
        value: 'Prototype-based programming',
        children: [{ value: 'JavaScript' }, { value: 'CoffeeScript' }, { value: 'Lua' }]
      }
    ]
  };

  nodeSelected(event){
    console.log(event.node.node.value);
    //debugger;
  }
}
