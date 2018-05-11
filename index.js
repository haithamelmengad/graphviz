var csv = require("csv-parser");
var fs = require("fs");

var count = 0;
var dot = "digraph{";
var graph = {};
var file = fs.createReadStream("userdata1.csv")
	.pipe(csv()).on("data", function (data) {
		var key = data.user + " -> " + data.server;
		if(data.user && data.server) {
			if(!graph[key]){
				graph[key] = 1;
			} else {
				graph[key] +=1;
			}
		}
        
		// if(count <= 2000 && count%2!==0 ){
		//     dot += '\n';
		//     dot += + ';';
		// }
		count++;
	}).on("finish", function(){   
		for (edge in graph) {
			dot += "\n";
			dot += edge + " [label=" + graph[edge] + "];";

		} 
		dot += "}";
		console.log(dot);
	});






