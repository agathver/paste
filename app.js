require('dotenv').config();
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const twig = require('twig');

const config = require('./config');
const routes = require('./routes');

const app = express();

if (!config.production) {
    twig.cache(false);
}

app.set("twig options", {
    allow_async: true,
    strict_variables: false
});

app.set('view engine', 'twig');

const logger = config.production ? morgan('combined') : morgan('dev');

app.use(logger);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(csrf({ cookie: true }));

app.use('/', routes);
app.use(express.static(__dirname + '/public'));


mongoose.connect(config.dsn)
    .then(() => {
        console.log(`Connected to database at ${config.dsn}`);

        app.listen(config.port, (err) => {
            if (err) {
                throw err;
            }
        });
    })
    .then(() => console.log(`Server started on port ${config.port}`))
    .catch(console.error);
