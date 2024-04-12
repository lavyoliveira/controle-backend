import { WebSocketServer } from 'ws';

export default class Communication {
    WebSocketServer: WebSocketServer;

    constructor() {
        this.WebSocketServer = new WebSocketServer({ port: 8080 });
        console.log('WebSocketServer is running on port 8080');
    }

    onConnection(callback: any) {
        this.WebSocketServer.on('connection', callback);
    }

    broadcast(data: any) {
        this.WebSocketServer.clients.forEach((client) => {
            if (client.readyState === 1) {
                client.send(JSON.stringify(data));
            }
        });
    }

    send(client: any, data: any) {
        client.send(data);
    }
}