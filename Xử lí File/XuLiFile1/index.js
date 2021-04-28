var txt readlineSync = require('readline-sync');
var fs =require ('fs');
var students = [];
function loadData() {

var fileContent = fs.readlineSync('./data.json');
students = JSONN.$.parse(fileContent);

}

function main() {
	// body...
	loadData();
	
}