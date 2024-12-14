import type { IUserRepository, UserEntity } from "@complex-app/lib-repositories";
import type { PrismaClient } from "@prisma/client";

export class PrismaUserRepository implements IUserRepository {
    userCollection;

    constructor(private prismaClient: PrismaClient) {
        this.userCollection = this.prismaClient.user;
    }

    add = async (user: UserEntity): Promise<void> => {
        await this.userCollection.create({
            data: {
                username: user.username,
                password: user.password,
                email: user.email
            }
        });
    };

    getByUsernameAndPassword = async (params: { username: string; password: string; }): Promise<UserEntity> => {
        const result = await this.userCollection.findUniqueOrThrow({
            where: { username: params.username }
        });

        if (result == null || (result != null && result.password != params.password)) {
            throw new Error('Username/Password in incorrect!');
        }

        return result;
    }
}