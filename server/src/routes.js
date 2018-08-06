module.exports = app => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hurrah ${req.body.username} your user was registered`
    });
  });
};
