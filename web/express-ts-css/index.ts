import { createServer } from "node:http";
import { createExpressApp } from "./src/app.js";
import { prismaClient, PrismaUserRepository } from '@complex-app/lib-implementations';
import { UserService } from "@complex-app/lib-services";

const start = async () => {
    const userRepository = new PrismaUserRepository(prismaClient);
    const userService = new UserService(userRepository);

    const server = createServer(createExpressApp({ userService }));
    const PORT = process.env.PORT ?? 8080;
    server.listen(PORT, () => console.log(`Server listening on ${PORT}.`));
}

start();