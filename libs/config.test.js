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
    jwtSecret: "Nta$K-AP1",
    jwtSession: {session: false}
};
