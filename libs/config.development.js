module.exports = {
    database: "tasks",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "tasks.sqlite",
        define: {
            underscored: true
        }
    },
    jwtSecret: "Pr0c0n1P2-4P1",
    jwtSession: {session: false}
};
