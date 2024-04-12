import Communication from '../../utils/Communication';
import IRequest from '../interfaces/IRequest';
import IResponse from '../interfaces/IResponse';
import ControlService from '../services/ControlService';

export default class ControlController {
    async handle(request: IRequest, communication: Communication) {
        const controlService = new ControlService();

        try {
            const result = await controlService.registerStudent(request.data);
            const response: IResponse = {
                type: 'success',
                data: result
            };

            return communication.broadcast(response);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}