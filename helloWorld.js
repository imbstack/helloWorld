var figlet = require("figlet");

//A comment
figlet.text("Hello world!", function(error, data) {
    console.log(error || data);
 });
