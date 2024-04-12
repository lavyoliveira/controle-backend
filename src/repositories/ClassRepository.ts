import { Db } from 'mongodb';

export default class ClassRepository {
    private database: Db;

    constructor(database: Db) {
        this.database = database;
    }

    async getAll() {
        return this.database.collection('classes').find().toArray();
    }

    async getById(id: string) {
        return this.database.collection('classes').findOne({});
    }
}