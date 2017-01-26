import passport from "passport";
import {Strategy, ExtractJwt} from "passport-jwt";

module.exports = app => {
    const Users = app.db.models.Users;
    const cfg = app.libs.config;
    const params = {
        secretOrKey: cfg.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeader()
    };
    const strategy = new Strategy(params, (payload, done) => {
        console.log("payload: " + payload);
        Users.findById(payload.id)
        .then(user => {
            console.log("autenticando ");
            if (user) {
                console.log("ID: " + user.id );
                console.log("NAME: " + user.name );
                console.log("EMAIL: " + user.email );
                console.log("PASSWORD: " + user.password );
                return done(null, {
                    id: user.id,
                    email: user.email
                });
            }
            return done(null, false);
        })
        .catch(error => done(error, null));
    });
    passport.use(strategy);
    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};
