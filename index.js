const express=require('express');
const app = express();
const path = require('path');
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/:name", function(req, res){
    res.render(""+req.params.name);
})
app.get("/", function(req, res){
    res.render("homepage");
})
app.listen(3000,function(req,res){
    console.log('listening on port 3000');
});