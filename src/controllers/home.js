const home = (req, res) =>
 { res.type('text/html'); res.status(200); res.send(""<p>Use port 80 - I'm too lazy to redirect :P</p>");
  // res.render('home', { params : {} });
}

module.exports = home;
