import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './prac-directives.component.html',
  styleUrls: ['./prac-directives.component.css']
})
export class PracDirectivesComponent implements OnInit {
cnt = 0;
visible = true;
repetition = [];
paragraph = "This paragraph will toggle with the button.";


  toggle(){
  this.paragraph = "This paragraph will toggle with the button.";
  this.cnt++;
  this.repetition.push(this.cnt);
  this.cnt % 2 == 0 ? this.visible = true : this.visible = false;
  // console.log(this.cnt);
}
  constructor() { }

  ngOnInit() {
  }

}
