const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const route = require('./routes');
const db = require('./config/db');
const port = 3000;

// Connect DB
db.connect();

//override with HTTP-Method header in the request .... ex: request POST but server received PUT
app.use(methodOverride('_method'));

// Using data resources static
app.use(express.static(path.join(__dirname, 'public')));

//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP logger
app.use(morgan('combined'));

// Template
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
