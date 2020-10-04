const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const post = require('./routs/post');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.get('/', post.index);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id([0-9]+)/edit', post.edit);
app.put('/posts/:id([0-9]+)', post.update);
// app.delete('/posts/:id', post.destroy);

app.listen(3000);

console.log('server listen starting ....');
