import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template:`<h1>vivek{{title}}</h1>`,
  templateUrl: './app.component.html',
  // template:`<h1>vivek{{title}}{{name}}</h1>
  // <h3>{{getData()}}</h3>
  // {{45+45}}
  // rbrbrbrb`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FirstDemo';
  // name = "john";
  arr:Number[]=[1,2,3,4,5,6];

  userInput:string = '';
  name:string="John";

  getdata():string {
    return this.userInput+this.name;
  }

  // getData():string{
  //   return this.name+this.title;
  // }
}
