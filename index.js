const { Client } = require("discord.js");

function Login(client, token) {
    this.client = client;
    this.token = token;

    this.client = new Client()

    this.client.login(this.token)
}

module.exports = {
    Login
}