const express = require('express');

// for accessing path
const path = require('path');

// connecting to database
require('./db/conn');

// creating schemas and models
const Data = require('./models/createSchema');

// creating express app
const app = express();
// setting the port
const port = process.env.PORT || 3000;

// without handlebars
const static_path = path.join(__dirname, '../public/');
app.use(express.static(static_path));

// to get the data
app.use(express.urlencoded({
    extended: false
}))

// using handlebars
app.set("view engine", "hbs");

// creating routes
// get method
app.get('/hbs', (req, res) => {
    res.render("index");
})
app.get('/hbs/getData', (req, res) => {
    Data.find().then((data) => {
        console.log(`fetching data...`);
        res.render("index2", { data: data });
        console.log(`data fetched`);
    }).catch((err) => {
        console.log(err);
    })
})
app.get('/hbs/update-data', (req, res) => {
    res.render("index3");
})
app.get('/hbs/delete-data', (req, res) => {
    res.render("index4");
})
// post method
app.post('/hbs/form', async (req, res) => {
    try {
        let uName = String(req.body.uName);
        let uDob = String(req.body.uDob);
        if (uName.length > 0 && uDob.length > 0) {
            const addDataToDb = new Data({
                name: uName,
                dob: uDob
            })
            await addDataToDb.save();
            console.log('Data added to DB');
            res.status(201);
            res.render("index");
        }
        else {
            res.send('Data cannot be added');
        }

    }
    catch (err) {
        res.status(400);
        console.log(err);
    }
})
app.post('/hbs/update-data/:slug1/:slug2', (req, res) => {
    Data.updateOne({ name: req.params.slug1 }, { $set: { name: req.params.slug2 } }).then((data) => {
        console.log(data)
        if (data.modifiedCount !== 0) {
            res.send(`[SUCCESS] Data is Updated.`)
        }
        else {
            res.send(`[!ERROR] Data is not updated.`)
        }        
    }).catch((err) => {
        console.log(err)
    })
})
app.post('/hbs/delete-data/:slug', (req, res) => {
    Data.deleteOne({name: req.params.slug}).then((data) => {
        console.log(data)
        if (data.deletedCount !== 0) {
            res.send('[SUCCESS] Data deleted.')
        }
        else {
            res.send('[!ERROR] Data cannot be deleted')
        }
    }).catch((err) => {
        console.log(err)
    })
})

// starting the express server
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Server started...`);
        console.log(`http://localhost:${port}/hbs`);
    }
})

