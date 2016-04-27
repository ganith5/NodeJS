/**
 * Created by Pavithra on 4/26/16.
 * Index JS, which actually is a module.
 * Call the server module from this page to start the server.
 * This is the main page of the application.
 *
 */

//Dependency Injection
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route,handle);


