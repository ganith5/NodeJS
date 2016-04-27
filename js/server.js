/**
 * Created by Pavithra on 4/26/16.
 * Node Javascript used to start server and export the module 'server'
 */

var http = require("http");
var url = require("url");


function start(route, handle){
    function onRequest(request,response) {
        var postData = '';
        var pathname = url.parse(request.url).pathname;
        console.log("Request received : " + pathname);
        request.setEncoding("UTF-8");

        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;
            console.log("Received POST data chunk " + postDataChunk);
        });

        request.addListener("end", function(){
            route(pathname, handle, response, postData);
        })

        // response.writeHead(200, {"Content-Type": "text/plain"});
        // response.write(content);
        // response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server started on port 8888");
}

exports.start = start;
