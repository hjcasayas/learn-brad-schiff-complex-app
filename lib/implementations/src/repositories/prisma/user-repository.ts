import type { IUserRepository, UserEntity } from "@complex-app/lib-repositories";
import type { PrismaClient } from "@prisma/client";

export class PrismaUserRepository implements IUserRepository {
    userCollection;

    constructor(private prismaClient: PrismaClient) {
        this.userCollection = this.prismaClient.user;
    }

    add = async (user: UserEntity): Promise<UserEntity> => {
        try {
            const createdUser = await this.userCollection.create({
                data: {
                    username: user.username,
                    password: user.password,
                    email: user.email
                }
            });

            return createdUser;
        } catch (error) {
            // TODO: log error
            console.log({ error });
            throw new Error('Repository implementation error.');
        }
    };

    getByUsername = async (params: { username: string; password: string; }): Promise<Omit<UserEntity, 'password'> | null> => {
        try {
            const result = await this.userCollection.findUniqueOrThrow({
                where: { username: params.username }
            });

            return {
                id: result.id,
                username: result.username,
                email: result.email,
                createdDate: result.createdDate,
                updatedDate: result.updatedDate,
            };
        } catch (error) {
            // TODO: log error
            console.log({ error });
            throw new Error('Repository implementation error.');
        }
    }
}