let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let session = require('express-session')
let mongo = require('mongodb')

//moteur de template
app.set('view engine', 'ejs')

//middleWare
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(session({
    secret: 'qsfvdsf',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))

app.use(require('./middlewares/flash'))


//routes
app.get('/', (req, res) => {
    console.log(req.session);
    res.render('pages/index')
})


app.post('/', (req, res) => {
    if (req.body.message === undefined || req.body.message === '') {
        req.flash('error', "Vous n'avez pas posté de message")
        res.redirect('/')
    } else {
        console.log(req.body.message)
    }
})

app.listen(8080)