const { Client } = require("discord.js");

function Login(token) {
    this.token = token;

    this.client = new Client()

    this.client.login(this.token)
    .then(() => {
        console.log(`${this.client.user.tag} is ready.`)
    });
}

function version() {
    const pkg = require("./package.json");

    console.log(pkg.version);
}

module.exports = {
    Login,
    version
}