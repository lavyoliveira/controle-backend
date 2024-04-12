import Communication from './utils/Communication';
import ControlController from './src/controllers/ControlController';
import IRequest from './src/interfaces/IRequest';

const communication = new Communication();
const controlController = new ControlController();

communication.onConnection((socket: WebSocket) => {
    console.log('Connected to client');

    socket.onmessage = (event: MessageEvent) => {
        console.log('Received message:', event.data);

        try {
            const request = JSON.parse(event.data) as IRequest;
            return controlController.handle(request, communication);
        } catch (error: any) {
            console.error('Error:', error.message);

            return communication.send(socket, {
                type: 'error',
                data: {
                    message: error.message
                }
            });
        }
    };
});