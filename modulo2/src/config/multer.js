const path = require('path')
const crypto = require('crypto')
const multer = require('multer')

module.exports = {
  storage: multer.diskStorage({ // salvar imagens no disco
    destination: path.resolve(__dirname, '..', '..', 'temp', 'uploads'), // local salvamento
    filename: (req, file, cb) => { // qual nome os arquivos vão ser salvos
      crypto.randomBytes(16, (err, raw) => {
        if (err) return cb(err)

        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
}
