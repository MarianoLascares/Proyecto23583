const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes')
const shopRoutes = require('./src/routes/shopRoutes')
const adminRoutes = require('./src/routes/adminRoutes')
const authRoutes = require('./src/routes/authRoutes')

const port = process.env.PORT || 3000;
app.use(express.static('/public'));

app.use('/', mainRoutes)
app.use('/shop', shopRoutes)
app.use('/admin', adminRoutes)
app.use('/auth', authRoutes)

app.listen(port, () => console.log("Servidor corriendo en http://localhost:3000"));