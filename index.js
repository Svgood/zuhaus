var server = require("./server")
var router = require("./router")
var requestHandlers = require("./requestHandlers")

var handle = {}
handle["/home"] = requestHandlers.openPage;
handle["/rent"] = requestHandlers.openPage;
handle["/contacts"] = requestHandlers.openPage;
handle["/about"] = requestHandlers.openPage;
handle["url"] = requestHandlers.openPage;
handle["image"] = requestHandlers.show;


server.start(router.route, handle)