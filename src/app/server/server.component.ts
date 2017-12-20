import { Component } from '@angular/core'; // allows type decorator of Component



@Component({
    selector: 'app-server',
    templateUrl: './server.component.html', // et html template of this component in current directory
    styles: [`
    .online{
        color:white;
    }
    `]
})
export class ServerComponent {
// Component is essentially a TypeScript class

    // local variables
    serverId: Number = 10;
    serverStatus: String = 'offline';

    constructor() {
        // if random value greater than 0.5, set as online else offline
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    // defining a method in a component
    getServerStatus() {
       return this.serverStatus;
    }

    getColor() {
        // if serverStatus is online return green else red
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}
