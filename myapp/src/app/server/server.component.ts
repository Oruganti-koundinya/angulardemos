import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: String = 'Online';
  allowNewServer =false;
  serverCreationStatus= "No Server Created";

  constructor() { }

  ngOnInit(): void {}

  getServerStatus()
  {
    return 'ss :' + this.serverStatus;
  }
  onCreateServer() {
    this.serverCreationStatus= "Server was Created";
  }
}
