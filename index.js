"use strict"

module.exports = {
    version: require("./src/index").version,
    Login: require("./src/Client/Login"),
    log: require("./src/index").log,
    Create: require("./src/db/connect.js")
}