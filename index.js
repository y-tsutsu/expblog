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
app.use(methodOverride());

// app.get('/', post.index);
// app.get('/posts/new', post.new);
// app.post('/posts/create', post.create);
// app.get('/post/:id', post.show);
// app.get('/post/:id/edit', post.edit);
// app.put('/post/:id', post.update);
// app.delete('/post/:id', post.destroy);

app.listen(3000);

console.log('server listen starting ....');
