import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './prac-directives.component.html',
  styleUrls: ['./prac-directives.component.css']
})
export class PracDirectivesComponent implements OnInit {
 cnt = 0;
  toggle(){
  this.cnt++;
  
}
display(){
  return true;
}
  constructor() { }

  ngOnInit() {
  }

}
