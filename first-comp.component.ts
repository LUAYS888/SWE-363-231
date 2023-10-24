import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent {
  public name = "LuaySaleh"
  public statement1=""

  printName(){
    return "LuayS"
  }

  public color= "blue"

  onClick(){
    this.statement1= "you Clicked"
  }
}
