import { Component } from '@angular/core'; // allows type decorator of Component



@Component({
    selector: 'app-server',
    templateUrl: './server.component.html', // et html template of this component in current directory
})
export class ServerComponent {
// Component is essentially a TypeScript class

    // local variables
    serverId: Number = 10;
    serverStatus: String = 'offline';

    // defining a method in a component
    getServerStatus() {
       return this.serverStatus;
    }

}
