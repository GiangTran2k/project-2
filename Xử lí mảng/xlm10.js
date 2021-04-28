const arr = [1,2,2,4,5,6,6,7,8];
console.log(arr);
var arr2=[];
var k = 5;
var j=0;
for (var i = 0; i < arr.length; i++) {

	if (arr[i]<=k) {
		arr2[j]=arr[i];
		j++;
	}

	
}
console.log("so phan tu be hon "+k );
console.log(arr2);