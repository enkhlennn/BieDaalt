const express = require('express')
const port = 3000
const app = express()
const session = require('express-session');
const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'livondb'
})
connection.connect((err) => {
    if(!err){
        console.log("Database is connected");
    }else{
        console.log('Aldaa');
    }
    });
    module.exports = connection;

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use(express.static('static'))
app.use('/css', express.static(__dirname + 'static/css'))

app.use(express.urlencoded({ extended: false}))
app.use(express.json());

app.use('/', require('./routes/pages'));
app.set('views', './views')
app.set('view engine', 'ejs')

app.post('/auth', (request, response) => {
    let email = request.body.email;
    let password = request.body.password;
    if(email && password){
        connection.query('SELECT * FROM users WHERE email = ? and pass = ?', [email, password], (error, results, fields) => {
            if(error) throw error;
            if(results.length > 0){
                request.session.loggedin = true;
                request.session.email = email;
                response.send('You have logged in successfully');
            }
            else{
                response.send('Incorrect Username or Password');
            }
            response.end();
        })
    }
    else{
        response.send('Please enter Username and Password');
        response.end();
    }
})

app.post('/registeract', (request, response) => {
    const{ email, username, password } = request.body;
    if(email && username && password){
        connection.query('INSERT INTO users (email, username, pass) VALUES (?,?,?)', [email, username, password], (error, results) => {
            if(error){
                // console.log('Amjiltgui');
                response.send('Amjiltgui')
            }
            else{
                // console.log('Amjilttai')
                response.send('Amjilttai')
            }
        })
    }
    // response.end();
})

app.listen(port, () => console.info(`Listening on port ${port}`))
