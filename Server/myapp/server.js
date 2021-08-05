const express = require("express");
const app = express();
const dataRouter = require('./routes/Data_Collection')
const cors = require('cors')
require("./dbConnection/mongo_connect");
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use("/Data_Collection", dataRouter)
app.use((req, res, next) => {
  console.log(new Date(), req.url, req.method)
  next()
})
app.listen(PORT, (err) => {
    if (!err)
        console.log(`server started ${PORT}`)
    else
        console.log(err);
});
