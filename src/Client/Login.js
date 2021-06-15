const { log } = require("../index")

function Login(client, token) {
    this.client = client;
    this.token = token;

    if (!this.client) {
        log("You must provide the client value at Login function.", "trace")
        process.exit(1)
    };
    if (!this.token) {
        log("You must provide a token in Login function.", "trace")
        process.exit(1);
    };

    this.client.login(this.token)
    .then(() => {
        log(`${this.client.user.tag} is ready.`, "log")
    });
}

module.exports = Login;