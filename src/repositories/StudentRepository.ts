import { Db } from 'mongodb';

export default class StudentRepository {
    private database: Db;

    constructor(database: Db) {
        this.database = database;
    }
    
    async getAll() {
        return [];
    }

    async getById(id: string) {
        return {};
    }

    async update(id: string, data: any) {
        return {};
    }
}