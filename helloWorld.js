var figlet = require("figlet");

figlet.text("Hello world!", function(error, data) {
    console.log(error || data);
 });