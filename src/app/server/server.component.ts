import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  userName = "";
  emptyUn: Boolean = true;

  onUpdateUserName(event: Event){
  this.userName = (<HTMLInputElement>event.target).value;
}
constructor(){
  this.serverId = Math.floor(Math.random() * 20 + 5);
  this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
}
getColor(){
  return this.serverStatus === 'online' ? 'green' : 'red';
}
userNameEmpty(){
  return this.userName;
}

onUserNameNotEmpty(event: Event){
  this.userName = "";
}

getServerStatus(){
  return this.serverStatus;
}

}
