var querystring = require("querystring"),
	fs = require("fs"),
	url = require("url");

function openPage(response, request){
	var pathname = url.parse(request.url).pathname.slice(1);
	if (pathname.indexOf(".") == -1) pathname += ".html"
	console.log("page " + pathname + " loaded")
	response.writeHead(200, {"Content-Type": "text/html"});
	//Считывание потоком
	var file = new fs.ReadStream(pathname)
	file.pipe(response)
	
	file.on("error", function(err){
		response.statusCode = 500;
		response.end("Server error");
		console.error(err)
	})
	
	response.on("close", function(){
		file.destroy();
	})
	
	//Считывание без потока
	// fs.readFile(pathname, function(err,data){
		// if (err) throw err;
		// response.write(data.toString())
		// response.end();
	// })
}

function show(response, request) {
	var pathname = url.parse(request.url).pathname.slice(1);
	console.log("Loading image " + pathname)
	fs.readFile("C:/Users/Skuld/Desktop/LearningJavaScript/game/" 
		+ pathname, "binary", function(error, file){
			if (error) throw error;
			response.writeHead(200, {"Content-Type" : "image/png"})
			response.write(file, "binary")
			response.end()
		})
}

exports.openPage = openPage;
exports.show = show;