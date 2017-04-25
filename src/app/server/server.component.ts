import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  userName = "";

  onUpdateUserName(event: Event){
  this.userName = (<HTMLInputElement>event.target).value;
}


getServerStatus(){
  return this.serverStatus;
}

}
