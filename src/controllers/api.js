const multer = require ('multer');

// Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb)=> cb(null, 'uploads') ,
  filename: (req, file, cb)=> cb(null, file.fieldname + '-' + Date.now())
});
const store = multer({ storage });

// Express route (POST)
const retrieve = {
  post : (req, res) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    } else {

        // res.type('application/json');
        // res.status(200);
        res.send(file);
        // res.render(results);
      }
  }
};

module.exports = { retrieve, store };
