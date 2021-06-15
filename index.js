"use strict"

module.exports = {
    version: require("./src/index").version,
    Login: require("./src/Client/Login.js"),
    log: require("./src/index").log
}