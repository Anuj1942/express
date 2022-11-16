const express = require("express");
const path = require("path");
const app = express();
const hostname = '127.0.0.1';
const port = 3005;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the tamplet engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// ENDPOINS
app.get('/', (req, res) => {
    const con = "This is the best content"
    const params = {'title': 'pubG is the best game', 'content':con}
    res.render('index.pug', params);
})
app.post('/', (req,res) => {
    console.log(req.body)
    const params = {'message': 'Your form has been submitted successfully'}
    res.render('index.pug', params);
})
// START THE SERVER
app.listen(port,hostname, () => {
    console.log(`The application started successfully on port ${port}`)
})