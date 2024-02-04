import { Service } from 'typedi';
import { DB_NAME, DB_URL } from '@app/env';
import { Db, MongoClient } from 'mongodb';

@Service()
export class DatabaseService {
    db: Db;
    client: MongoClient;
    get database(): Db {
        return this.db;
    }

    async start(url: string = DB_URL) {
        try {
            this.client = new MongoClient(url);
            await this.client.connect();
            this.db = this.client.db(DB_NAME);
        } catch {
            throw new Error('Database connection error');
        }
    }
    async closeConnection() {
        return this.client.close();
    }
}
