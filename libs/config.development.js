import logger from "./logger.js";

module.exports = {
    database: "tasks",
    username: "root",
    password: "pr0c0np3",
    params: {
        dialect: "mysql",
        // storage: "tasks.sqlite",
        logging: (sql) => {
            logger.info(`[${new Date()}] ${sql}`);
        },
        define: {
            underscored: true
        }
    },
    jwtSecret: "Pr0c0n1P2-4P1",
    jwtSession: {session: false}
};
