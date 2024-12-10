import type { IUserRepository, UserEntity } from "@complex-app/lib-repositories";
import type { Collection, Db, Document } from "mongodb";

export class MongoDBUserRepository implements IUserRepository {
    userCollection: Collection<Document>;
    constructor(private db: Db) {
        this.userCollection = db.collection('users');
    }

    add = async (user: UserEntity): Promise<void> => {
        await this.userCollection.insertOne(user);
    };
}