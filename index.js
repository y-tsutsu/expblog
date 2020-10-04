const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const csrf = require('csurf');
const post = require('./routs/post');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(cookieParser());
app.use(expressSession({ secret: 'my-ssecret-key' }));
app.use(csrf());
app.use((req, res, next) => {
    res.locals.csrftoken = req.csrfToken();
    next();
});

app.use(logger('dev'));

app.get('/', post.index);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id([0-9]+)/edit', post.edit);
app.put('/posts/:id([0-9]+)', post.update);
app.delete('/posts/:id', post.destroy);

app.listen(3000);

console.log('server listen starting ....');
