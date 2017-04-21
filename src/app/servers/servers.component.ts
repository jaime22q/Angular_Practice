import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationSt = `No server was created`;
  serverName = '';

  constructor() {
  setTimeout(()=> {
  this.allowNewServer = true;
},2000);
}

  ngOnInit() {
  }
onCreatedServer(){
  this.serverCreationSt = `Server was created! The server name is ${this.serverName}`;
}

onUpdateServerName(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value;
}

}
