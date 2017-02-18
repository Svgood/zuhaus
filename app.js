var express = require("express")
var app = express()

server = app.listen(3000, "192.168.1.6", function() {
	console.log("server is running on localhost:3000")
})

app.get("/\w+?.html", function(req,res){
	console.log(req.url + " 1")
	console.log("request from " + req.ip)
	res.sendfile(__dirname + req.url + ".html")
})

app.get("/:file", function(req,res){
	file = req.params.file
	console.log(req.ip)
	console.log("requesting images " + file)
	res.sendfile(__dirname + "/" + file)
})