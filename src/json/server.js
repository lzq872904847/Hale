var fs = require('fs');					//操作文件的
var express = require('express');
var url = require("url");
var app = express();

var dataBuffer = [];
app.get("/360bang/:num",(req,res) => {
	res.header('Content-type', 'application/json');
	var myurl = url.parse(req.url);
	var fn=myurl.query.split("=")[1];
	var num =  req.params.num;
	var filename = "./" + num + ".json";
	var result = null;
	for(var i = 0; i < dataBuffer.length;i++){
		var dataObj = dataBuffer[i];
		if (num in dataObj){
			result = dataObj[num];
			break;
		}
	}
	if (result == null){
		fs.readFile(filename, (err, data) => {
			if (err){
				console.log(err);
				return;
			}
			var o = {};
			o[num] = data;
			dataBuffer.push(o);
			result = data;
			if(myurl.query.split("=")[2]){
				var fn2 = myurl.query.split("=")[2];
				res.send(fn+"("+result+")"+";"+fn2+"()");
			}else {
				res.send(fn+"("+result+")");
			}
		});
	}else{
		if(myurl.query.split("=")[2]){
			var fn2 = myurl.query.split("=")[2];
			res.send(fn+"("+result+")"+";"+fn2+"("+result+")");
		}else {
			res.send(fn+"("+result+")");
		}
	}
});

app.listen(3000, () =>{
	console.log("服务已经启动");
});

