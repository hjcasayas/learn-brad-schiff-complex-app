import { createServer } from "node:http";
import { createExpressApp } from "./src/app.js";
import { mongoClient, MongoUserRepository, UserServiceImpl } from '@complex-app/lib-implementations';
import { UserService } from "@complex-app/lib-services";

const start = async () => {
    await mongoClient.connect();
    const db = mongoClient.db();
    const mongoUserRepository = new MongoUserRepository(db);
    const userServiceImpl = new UserServiceImpl(mongoUserRepository);
    const userService = new UserService(userServiceImpl);

    const server = createServer(createExpressApp({ userService }));
    const PORT = process.env.PORT ?? 8080;
    server.listen(PORT, () => console.log(`Server listening on ${PORT}.`));
}

start();