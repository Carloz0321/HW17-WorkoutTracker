const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3030;
const app = express();

app.use(morgan("dev"));


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"

mongoose.connect(MONGODB_URI, {
    userNewUrlPaser: true,
    userFindAndModify: false
});

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
