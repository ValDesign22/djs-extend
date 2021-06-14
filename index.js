const { Client } = require("discord.js");

function Login(token) {
    this.token = token;

    this.client = new Client()

    this.client.login(this.token)
}

module.exports = {
    Login
}