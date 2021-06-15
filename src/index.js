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
    version,
    log
}