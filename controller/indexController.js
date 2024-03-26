exports.index = (req, res) => {
  res.render("index", { user: req.user });
};

exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
