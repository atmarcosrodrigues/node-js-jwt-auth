const db = require("../models");
/* const config = require("../config/authConfig");
const User = db.user; */
const signUp = require("../services/signUpService");
const signIn = require("../services/signInService");
// const Role = db.role;

// const Op = db.Sequelize.Op;
/* 
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
 */
exports.signup = async (req, res) => {
  await signUp(req, res);
  // User.create({
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: bcrypt.hashSync(req.body.password, 8),
  // })
  //   .then((user) => {
  //     if (req.body.roles) {
  //       Role.findAll({
  //         where: {
  //           name: {
  //             [Op.or]: req.body.roles,
  //           },
  //         },
  //       }).then((roles) => {
  //         user.setRoles(roles).then(() => {
  //           res.send({ message: "User registered successfully!" });
  //         });
  //       });
  //     } else {
  //       user.setRoles([1]).then(() => {
  //         res.send({ message: "User registered successfully!" });
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     res.status(500).send({ message: err.message });
  //   });
};

exports.signin = async (req, res) => {
  await signIn(res, req);
  /*   User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        algorithm: "HS256",
        allowInsecureKeySizes: true,
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    }); */
};
