let posts = [
    { title: 'title0', body: 'body0' },
    { title: 'title1', body: 'body1' },
    { title: 'title2', body: 'body2' },
];

exports.index = (req, res) => {
    res.render('posts/index', { posts: posts });
}

exports.show = (req, res) => {
    res.render('posts/show', { post: posts[req.params.id] });
}

exports.new = (req, res) => {
    res.render('posts/new');
}

exports.create = (req, res) => {
    var post = {
        title: req.body.title,
        body: req.body.body,
    };
    posts.push(post);
    res.redirect('/');
}

exports.edit = (req, res) => {
    res.render('posts/edit', { post: posts[req.params.id], id: req.params.id });
}

exports.update = (req, res) => {
    posts[req.params.id] = {
        title: req.body.title,
        body: req.body.body,
    };
    res.redirect('/');
}
