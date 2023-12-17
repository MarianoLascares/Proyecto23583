const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./src/routes/mainRoutes')
const shopRoutes = require('./src/routes/shopRoutes')
const adminRoutes = require('./src/routes/adminRoutes')
const authRoutes = require('./src/routes/authRoutes')
const methodOverride = require('method-override');
const session = require('express-session')

app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src/views'))

app.use(session({
    secret: "SecretHash",
    resave: false,
    saveUninitialized: false
}))
app.use((req, res, next) => {
    res.locals.sessionUser = req.session.userid;
    next();
});

app.use(methodOverride('_method'));

app.use(express.static(__dirname + '/public'))
app.use('/', mainRoutes)
app.use('/shop', shopRoutes)
app.use('/admin', adminRoutes)
app.use('/auth', authRoutes)

app.use((req, res, next) => {
    res.redirect('/error404'); // Redirige a la ruta error404
  });

app.listen(port, () => console.log("Servidor corriendo en http://localhost:3000"));