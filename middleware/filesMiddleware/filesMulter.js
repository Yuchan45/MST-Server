const path = require('path');
const multer = require('multer');

// Config Multer
const fileStorageEngineConfig = multer.diskStorage({
    destination: function(req, file, cb) {
        let folder = '';
        folder = path.join(__dirname, '../../public/uploads');
        cb(null, folder);
    },
    filename: function(req, file, cb) {
        // console.log(file.originalname)
        let pdfName = '';
        pdfName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, pdfName);
    }
});

let upload = multer({storage: fileStorageEngineConfig});

// let multipleUpload = upload.any();
let singleUpload = upload.single('pdf');

module.exports = singleUpload;