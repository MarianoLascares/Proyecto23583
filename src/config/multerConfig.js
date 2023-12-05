const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const licence_id = req.body.licence;
    const licenceFolders = {
      1: 'pokemon',
      2: 'star-wars',
      3: 'harry-potter'
    };

    const destinationFolder = `./public/img/${licenceFolders[licence_id]}`;
    cb(null, destinationFolder);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = `${file.fieldname}.${file.originalname.split('.').pop()}`;

    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;