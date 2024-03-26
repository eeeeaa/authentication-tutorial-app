exports.sign_up_get = (req, res) => res.render("sign-up-form");

exports.sign_up_post = async (req, res, next) => {
  try {
    //TODO: sanitize response and not storing user in plaintext
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    const result = await user.save();
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
};
