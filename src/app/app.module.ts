import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DepartComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavBarComponent } from './navbar/navbar.component';

import {EmployeeCountComponent} from "./employeeCount/employeeCount.component";
import { AssignmentCardComponent } from './assignmCard/assignmCard.component';
import { AssignmentComponent } from './assignmenta/assignment.component';
import { EmployeeTitlePipe } from './employeePipe/employeePipe.component';
import { SimpleChangesComponent } from './simpleChanges/simpleChanges.component';




@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,DepartComponent,NavBarComponent,CardComponent,EmployeeCountComponent,AssignmentCardComponent,AssignmentComponent,EmployeeTitlePipe,SimpleChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
