import express from 'express'
let exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
import path from 'path'
//importando rutas
import indexRoute from './routes/index'
import bookRoute from './routes/books'
//initializations
const app = express();
import './database'
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';

//Setting
app.set('port', process.env.PORT || 3001)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)

}))
app.set('view engine', '.hbs')
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//Routes
app.use('/',indexRoute)
app.use('/books',bookRoute)
//Static files

//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server running on por ${app.get('port')}`)
  })
