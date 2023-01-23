const { config } = require('dotenv')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require("mongoose")
require('dotenv').config()
process.env.TOKEN_SECRET;

//bring routes
const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')
const commentRoutes = require('./routes/comment')

const app = express()

mongoose.set('strictQuery', true);

mongoose
    .connect('mongodb://127.0.0.1:27017/blog', { useNewUrlParser: true})
    .then(() => console.log('db connected'))
    .catch (err => {
        console.log(err)
    })

//midlewares
// app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser())

//cors
if (process.env.NODE_ENV == 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }));

}

app.get('/',(req, res) => {
    res.json({
        success: true,
        message: ' you have access to home page'
    })
})

//routes middleware
app.use('/api', blogRoutes);
app.use('/api', authRoutes);
app.use('/api', commentRoutes);




const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})