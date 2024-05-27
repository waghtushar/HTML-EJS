const express = require('express')
const path = require('path')
const app = express()
app.listen(4282,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('server started :- http://localhost:4282')
    }
})
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, './public')));
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    return res.render('index')
})

app.get('/authentication-login', (req, res) => {
    return res.render('authentication-login')
})

app.get('/authentication-register', (req, res) => {
    return res.render('authentication-register')
})

app.get('/charts', (req, res) => {
    return res.render('charts')
})

app.get('/error-403', (req, res) => {
    return res.render('error-403')
})

app.get('/error-404', (req, res) => {
    return res.render('error-404')
})

app.get('/error-405', (req, res) => {
    return res.render('error-405')
})

app.get('/error-500', (req, res) => {
    return res.render('error-500')
})

app.get('/form-basic', (req, res) => {
    return res.render('form-basic')
})

app.get('/form-wizard', (req, res) => {
    return res.render('form-wizard')
})

app.get('/grid', (req, res) => {
    return res.render('grid')
})

app.get('/icon-fontawesome', (req, res) => {
    return res.render('icon-fontawesome')
})

app.get('/icon-material', (req, res) => {
    return res.render('icon-material')
})

app.get('/index2', (req, res) => {
    return res.render('index2')
})

app.get('/pages-buttons', (req, res) => {
    return res.render('pages-buttons')
})

app.get('/pages-calendar', (req, res) => {
    return res.render('pages-calendar')
})

app.get('/pages-chat', (req, res) => {
    return res.render('pages-chat')
})

app.get('/pages-elements', (req, res) => {
    return res.render('pages-elements')
})

app.get('/pages-gallery', (req, res) => {
    return res.render('pages-gallery')
})

app.get('/pages-invoice', (req, res) => {
    return res.render('pages-invoice')
})

app.get('/tables', (req, res) => {
    return res.render('tables')
})

app.get('/widgets', (req, res) => {
    return res.render('widgets')
})



