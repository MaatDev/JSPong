var http = require('http'),
url = require('url'),
path = require('path'),
fs = require('fs'),
sys = require('sys');

// In this case, I don't use Express.js for learning reasons.

var server = http.createServer(function(req,res){
	
	var uri = url.parse(req.url).pathname,
	filename = path.join(process.cwd(),uri);

	if(uri == "/") filename = path.join(__dirname,"/index.html");

	// Filename also passes the styles, images and scripts, thats the reason because I write the file in binary format.
	// Otherwise you can use res.write(file,'text/html') , res.write(file,'application/json'), etc ;

	path.exists(filename,function(exists){
		
		if(!exists){
			res.writeHead(404,{'Content-Type':'text/plain'});
			res.end("File not found");
		}else{			
			fs.readFile(filename,"binary",function(err,file){
				if(err){
					res.writeHead(500,{'Content-Type':'text/plain'});
					res.end(err + "\n");
				}else{
						var type;
						if(filename.match(/(.html)$/i) != null){
							type = 'text/html';
						}else if(filename.match(/(.js)$/i) != null){
							type = 'text/javascript';
						}else if(filename.match(/(.css)$/i) != null){
							type = 'text/css';
						}

					res.writeHead(200, {'Content-Type': type });
					res.write(file,'binary');
					res.end();
				}
			});
		}
	});

});

// you can pase PORT as an argument in the shell
var PORT = process.env.PORT || 3000;

server.listen(PORT,function(){
	console.log("Listen on port : " + PORT );
});

