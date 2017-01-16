module.exports = {
    database: "tasks_test",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "tasks.sqlite",
        logging: false,
        define: {
            underscored: true
        }
    },
    jwtSecret: "Pr0c0n1P2-4P1",
    jwtSession: {session: false}
};
