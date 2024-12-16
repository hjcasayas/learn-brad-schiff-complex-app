import { createServer } from "node:http";
import { createExpressApp } from "./src/app.js";
import { prismaClient, PrismaUserRepository, UserServiceImpl } from '@complex-app/lib-implementations';
import { UserService } from "@complex-app/lib-services";

const start = async () => {
    const prismaUserRepository = new PrismaUserRepository(prismaClient);
    const userServiceImpl = new UserServiceImpl(prismaUserRepository);
    const userService = new UserService(userServiceImpl);

    const server = createServer(createExpressApp({ userService }));
    const PORT = process.env.PORT ?? 8080;
    server.listen(PORT, () => console.log(`Server listening on ${PORT}.`));
}

start();