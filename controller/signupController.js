const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.sign_up_get = (req, res) => res.render("sign-up-form");

exports.sign_up_post = async (req, res, next) => {
  bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
    if (err) {
      // if err, do something
      return next(err);
    } else {
      // otherwise, store hashedPassword in DB
      try {
        const user = new User({
          username: req.body.username,
          password: hashedPassword,
        });
        const result = await user.save();
        res.redirect("/");
      } catch (err) {
        return next(err);
      }
    }
  });
};
