const { connect } = require("mongoose");

function Create(uri) {
    this.uri = uri;

    if (!this.uri) return console.trace("Please provide your mongoose connect URI.")

    connect(this.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Connected to MongoDB database.");
    })
    .catch((err) => {
        console.log(err);
    });
}


module.exports = Create;