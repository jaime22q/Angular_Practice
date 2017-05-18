import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './prac-directives.component.html',
  styles: [`
  .letter{
  color:white;
}
`]
})
export class PracDirectivesComponent implements OnInit {
cnt = 0;
visible = true;
counter = [];
paragraph = "This paragraph will toggle with the button.";


  toggle(){
  this.paragraph = "This paragraph will toggle with the button.";
  this.cnt++;
  this.counter.push(this.cnt);
  this.cnt % 2 == 0 ? this.visible = true : this.visible = false;
}
isFifth(){
  return (this.cnt > 4);
}

color(){
  return this.isFifth() ? "blue" : "";
}
  constructor() { }

  ngOnInit() {
  }

}
