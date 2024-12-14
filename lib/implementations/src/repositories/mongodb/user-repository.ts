import type { IUserRepository, UserEntity } from "@complex-app/lib-repositories";
import type { Collection, Db, Document } from "mongodb";

export class MongoUserRepository implements IUserRepository {
    userCollection: Collection<Document>;
    constructor(private db: Db) {
        this.userCollection = this.db.collection('users');
    }

    add = async (user: UserEntity): Promise<void> => {
        await this.userCollection.insertOne(user);
    };

    getByUsernameAndPassword = async (params: { username: string; password: string; }): Promise<UserEntity> => {
        const result = await this.userCollection.findOne({ username: params.username });

        if (result == null || (result != null && result.password != params.password)) {
            throw new Error('Username/Password in incorrect!');
        }

        return { username: result.username, password: result.password, email: result.email, id: result._id.toString(), createdDate: result.createdDate, updatedDate: result.updatedDate };
    }
}