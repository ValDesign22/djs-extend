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

function log(value, type) {
    this.value = value;
    this.type = type;
    
    const types = ["log", "error", "warn", "trace"];
    
    if (!this.value) return console.trace("You didn't provide a value in the ().");
    if (!this.type) {
        console.trace(`You didn't provide a type of log`);
        types.forEach(x => {
            console.error(x) 
        })
        
        return;
    }
    
    if (typeof this.type !== "string") return console.trace(`${this.type} is not a string value.`);
    
    if (!types.includes(this.type)) return console.trace(`${this.type} is not a valid console type.`);
    
    console[this.type](this.value);
}

version = require("../package.json").version;

module.exports = {
    Login,
    version,
    log
}