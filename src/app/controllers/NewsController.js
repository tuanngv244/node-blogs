class NewController {
  // [GET] ---------- /news ---------- //
  index(req, res) {
    res.render("news");
  }
  // [GET] ---------- /news/:slug ---------- //
  detail(req, res) {
    res.send("NEW DETAIL!!");
  }
}

module.exports = new NewController();
