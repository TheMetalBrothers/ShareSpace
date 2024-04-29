import express from 'express';
const app = express()
import mongoose from 'mongoose';
import bodyParser from "body-parser";

app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/posts')
    .then(() => console.log('Connected to mongoose db!'));

app.listen(3000, console.log('posts listening on', 3000))

const postSchema = new mongoose.Schema({
    username: String,
    image: String,
    description: String,
});

const Post = mongoose.model('Post', postSchema);

app.get('/posts', async function (req, res) {
    const posts = await Post.find();
    res.send(posts)
})

app.post('/posts', async (req, res) => {
  const newPost = new Post({
    username: req.body.username,
    image: req.body.image,
    description: req.body.description,
  });
  newPost.save().then(
    function () {
      res.send("Posted");
    },
    function (err) {
      console.log(err, "error posting");
    }
  );
});

app.delete('/posts', async function (req, res) {
  const query = { _id: req.body._id };
  Post.findOneAndDelete(query).then(
    function () {
      res.send("deleted a post");
    },
    function (err) {
      console.log(err, "error deleting post");
    }
  );
});
