var fs = require('fs');

var a=[];

function random(n) {
  for (let index = 0; index < n; index++) {
  	a[index]=Math.floor(Math.random() * n);
    // console.log(Math.floor(Math.random() * n)); 
    
    
  }


  
  
}

random(20);
  var s = a.toString();
  fs.writeFile('./random.txt',s,'utf-8',(err)=>{
  	if(err){
		return console.log('error write file')
	}
	console.log('success');

  });
  fs.readFile('./random.txt','utf-8',(err,data)=>{
	if(err){
		return console.log('error')
	}
	console.log(data);

	const arrData = data.split(",");

	console.log(arrData)
	console.log("tong cac so trong file la")
	var sum=0;
	for (var i = 0; i < arrData.length; i++) {
		sum=sum+Number(arrData[i]);
	}
	console.log(sum);
	// var s1=Array.from(data);
	// var sum=0;
	// for (var i = 0; i < s1.length; i++) {
	// 	sum+=s1[i];
	// }
	// console.log(sum);

});
