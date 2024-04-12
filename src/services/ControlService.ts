import ClassRepository from "../repositories/ClassRepository";
import StudentRepository from "../repositories/StudentRepository";
import Client from "../../utils/Client";

export default class ControlService {
    database: any;

    constructor() {
        this.database = Client.db('school');
    }

    async registerStudent(data: any) {
        const classRepository = new ClassRepository(this.database);
        const studentRepository = new StudentRepository(this.database);



        console.log('registerStudent', data);
        return 'hehe';
    }
}