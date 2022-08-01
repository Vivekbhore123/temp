import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
        selector:"empCount",
        templateUrl:"./employeeCount.component.html"
})

export class EmployeeCountComponent{
   @Input()     
   allCount:Number = 0;
   @Input()   
   maleCount:Number = 0;
   @Input()   
   femaleCount:Number = 0;

   selectedRBValue:string="all"

   @Output()
   rbSelection:EventEmitter<string> = new EventEmitter<string>();

   onRadioButtonSelectionChange():void{
        //child
        console.log("from child",this.selectedRBValue);
        this.rbSelection.emit(this.selectedRBValue);
   }
}