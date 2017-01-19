import jwt from "jwt-simple";

module.exports = app => {
  const cfg = app.libs.config;
  const Users = app.db.models.Users;

  app.post("/token", (req, res) => {
    if (req.body.email && req.body.password) {
      const email = req.body.email;
      const password = req.body.password;
      console.log("Log TOKEN before findOne: email:" + email + " password: " + password);
      Users.findOne({where: {email: email}})
        .then(user => {
          console.log("Log TOKEN after findOne: email:" + email + " user.password: " + user.password);
          if (Users.isPassword(user.password, password)) {
            console.log("Log TOKEN isPassword: email:" + email + " user.password: " + user.password);
            const payload = {id: user.id};
            res.json({
              token: jwt.encode(payload, cfg.jwtSecret)
            });
          } else {
            console.log("Log TOKEN else isPassword: email:" + email + " user.password: " + user.password);
            res.sendStatus(401);
          }
        })
        .catch(error => res.sendStatus(401));
    } else {
      res.sendStatus(401);
    }
  });
};
