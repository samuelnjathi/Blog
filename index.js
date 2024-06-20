import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

let posts =[];

app.get("/", (req, res) => {
    res.render("index.ejs", {
        posts: posts
    });
});

app.get("/post", (req, res) => {
    res.render("post.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/compose", (req, res) => {
    res.render("compose.ejs");
});

app.post("/compose", (req, res) => {
    const post = {
        title: req.body.title,
        text: req.body.text,
        author: req.body.author
    }
    posts.push(post);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})