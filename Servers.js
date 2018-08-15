// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORTa = 7000;

// Create a generic function to handle requests and responses
function handleRequesta(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("You're pretty af " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequesta);

// Start our server so that it can begin listening to client requests.
server.listen(PORTa, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORTa);
});
// Require/import the HTTP module

// Define a port to listen for incoming requests
var PORT = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("You're ugly af " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
