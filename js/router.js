/**
 * Created by Pavithra on 4/26/16.
 * Router to route requests to appropriate modules
 */

function route(pathname, handle, response,postData) {
    console.log("About to route a request for : " + pathname);
    if(typeof handle[pathname] === 'function') {
        var content = handle[pathname](response,postData);
        return content;
    } else {
        console.log("No request handler found for : " + pathname);
        return "404 error";
    }
}

exports.route = route;



