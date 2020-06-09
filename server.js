const express = require("express");


let server = express();
const PORT = process.env.PORT || 8080;


//Handle data and send HTML
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


//Routes
require("./routes/apiRoutes")(server);
require("./routes/htmlRoutes")(server);


//Start Server
server.listen(PORT, () => {
    console.log("Server is listening on port: " + PORT);
});