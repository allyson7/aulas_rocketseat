const express = require('express') // const variável sem valor alterado| require importa dependências
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

const logMiddleWare = (req, res, next) => {
  app.id = req.body.age
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  )
  if (app.id =  ) {

  } else {
    return next()
  }
}

app.get('/', (req, res) => {
  return res.render('main')
})

app.post('/check', (req, res) => {
  app.id = req.body.age
  if (app.id > 18) {
    return res.redirect('/major')
  } else {
    return res.redirect('/minor')
  }
})

app.get('/major', logMiddleWare, (req, res) => {
  return res.send(`Você é maior de idade e possui ${app.id} anos`)
})

app.get('/minor', logMiddleWare, (req, res) => {
  return res.send(`Você é menor de idade e possui ${app.id} anos`)
})

app.listen(3000)
