const { Client } = require("discord.js");

function Login(token) {
    this.token = token;

    this.client = new Client()

    this.client.login(this.token)
    .then(() => {
        console.log(`${client.user.tag} is ready.`)
    });
}

function version() {
    const pkg = require("./package.json");

    pkg.version;
}

module.exports = {
    Login
}