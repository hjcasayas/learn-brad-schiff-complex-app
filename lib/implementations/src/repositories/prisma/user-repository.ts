import type { IUserRepository, UserEntity } from "@complex-app/lib-repositories";
import type { PrismaClient } from "@prisma/client";

export class PrismaUserRepository implements IUserRepository {
    userCollection;

    constructor(private prismaClient: PrismaClient) {
        this.userCollection = this.prismaClient.user;
    }

    add = async (user: UserEntity): Promise<UserEntity | null> => {
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
            console.log('PrismaUserRepository.add error: ', error);
            return null;
        }
    };

    getByUsername = async ({ username }: { username: string }): Promise<UserEntity | null> => {
        try {
            const result = await this.userCollection.findUniqueOrThrow({
                where: { username }
            });

            return result;
        } catch (error) {
            // TODO: log error
            console.log('PrismaUserRepository.getByUsername: ', error);
            return null;
        }
    }
}