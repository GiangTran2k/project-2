var readlineSync = require('readline-sync');
var fs =require('fs');
var students =[];

function loadData() {

	// body...
	var fileContent = fs.readlineSync('./data.json');
	student = JSON.parse(fileContent);
}

function showMenu() {
	// body...
	console.log('1. Show all student');
	console.log('2. Create a new student');
	console.log('3. Save and exit');
	var option = readlineSync.question('> ');
	switch(option){
		case '1':
		showStudent();
		showMenu();
		break;
		case '2':
		showCreateStudent();
		showMenu();
		break;
		case '3':
		saveAndExit();
		showMenu();
		break;
		default:
		console.log('wrong option');
		showMenu();
		break;
	}

}

function showStudent() {
	// body...
	for (var student of students) {
		console.log(student.name, student.age );
	}
}
function showCreateStudent() {
	// body...
	var name = readlineSync.question('name: ');
	var age = readlineSync.question('age: ');
	var student = {
		name: name,
		age: parseInt(age)
	};
	students.push(student);

}

function saveAndExit() {
	// body...
	var content = JSON.stringify(students);
	fs.writeFileSync('./data.json',content,{ encoding: 'utf8'});
}

function main() {
	// body...
	loadData();
	console.log(student);
	showMenu();

	}

main();