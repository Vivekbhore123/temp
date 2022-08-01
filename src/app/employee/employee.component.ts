import {Component} from '@angular/core';

@Component({
        selector:"emp",
        templateUrl:"./employee.component.html"
})

export class EmployeeComponent{
   firstName:string = "Nick";
   gender:string = "Male";
   title:string="angularjs"
   age:Number = 23;
   pin:Number = 332211;


   tableEmp:boolean = false;

   testing():string{
        console.log("jnnfjnefjen");
        this.firstName = "leonardo dicaprio"
        return "I am vivek hello"
   }
   hideandshowtable():void{
     if(!this.tableEmp)
     {
     this.tableEmp = true;
    //  document.getElementById("hideandseek").value = "hide table";
     }
     else 
     {
     this.tableEmp = false;
    //  document.getElementById("hideandseek").value = "Show table";
     }
   }
   
  employees:any[]=[
        { code:"1",name:"tom",gender:"male",salary:3000000 },
        { code:"2",name:"shivam",gender:"male",salary:300 },
        { code:"3",name:"prasad",gender:"male",salary:35 },
        { code:"4",name:"neha",gender:"female",salary:30 }
      ]

     getAllCount():Number{
      return this.employees.length;
     } 

     getAllMaleCount():Number{
       return this.employees.filter(e=>e.gender=="male").length;
     }

     getAllFeMaleCount():Number{
      return this.employees.filter(e=>e.gender=="female").length;
    }

    rbselect:string="all";

    radioButtonSelectionCh(value:string){
      //parent 
      console.log("value from parent = ",value);
       this.rbselect = value;
    }
}

//component

//selector

//decorator

//attribute
//property

//property binding

//forceful property binding

//one way data binding 
//two way data binding - it is a mixture of event binding and property binding


