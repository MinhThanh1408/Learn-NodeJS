const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const route = require('./routes');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
const db = require('./config/db');

//HTTP logger
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: 'hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.listen(port, () => console.log(`http://localhost:${port}`));
//Routes init
route(app);
//Connect  to DB
db.connect();