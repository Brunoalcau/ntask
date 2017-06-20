import logger from "./logger.js";

module.exports = {
    database: "tasks",
    username: "root",
    password: "passwordadmin",
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
    jwtSecret: "Nta$K-AP1",
    jwtSession: {session: false}
};
