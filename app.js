const express = require('express');
const app = express();

require('dotenv').config();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.render("home");
})
app.listen(process.env.PORT||3000,function(){
    console.log('listening on port 3000');
})