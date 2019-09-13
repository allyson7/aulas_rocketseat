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

app.get('/', (req, res) => {
  return res.render('main')
})

app.get('/check:id', (req, res) => {
  const x = req.query.id
  if (x > 18) {
    return res.redirect('/major')
  } else {
    return res.redirect('/minor')
  }
})

app.listen(3000)
